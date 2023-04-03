class ProfessionalsController < ApplicationController
    before_action :authorize_p
    skip_before_action :authorize_p, only: [:signup, :index, :filter_by_title, :chats]

    def index
        if params[:category]
            category = Category.find_by(name: params[:category])
            return render json: Professional.where(category_id: category.id)
        else
            render json: Professional.all
        end
    end

    def update
        prof = Professional.find(params[:id])
        prof.update(update_prof_params)
        render json: prof, status: :created
    end

    def filter_by_title
        if params[:q]
            render json: Professional.where(job_title: params[:q])
        else
            render json: Professional.all.sample(8)
        end
    end

    def chats
        render json: Professional.find(params[:id]).clients.uniq
    end

    def job_reviews
        render json: Professional.find(params[:id]).jobs
    end

    def show
        prof = Professional.find(params[:id])
        render json: prof
    end

    def signup
        @prof = Professional.create!(signup_prof_params)

        if @prof.valid?
            @token = encode_token(username: @prof.username)
            render json: { user: ProfessionalSerializer.new(@prof), jwt: @token }, status: :created
        else
            render json: { error: 'failed to signup' }, status: :unprocessable_entity
        end
    end

    def me
        render json: @prof
    end

    private

    def signup_prof_params
        params.permit(:username, :job_title, :firstname, :lastname , :description, :email, :phone, :poster, :category_id, :portfoliourl, :location, :password, :password_confirmation)
    end

    def update_prof_params
        params.permit(:id, :job_title, :username, :firstname, :lastname , :description, :email, :phone, :portfoliourl, :location, :poster)
    end
end
