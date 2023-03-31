class ProfessionalsController < ApplicationController
    # skip_before_action :authorize, only: [:signup]

    def index
        render json: Professional.all
    end

    def show
        prof = Professional.find(params[:id])
        render json: prof
    end

    def signup
        prof = Professional.create!(signup_prof_params)
        render json: prof, status: :created
    end 

    def me
        prof = Professional.find_by(username: session[:username])
        render json: prof
    end

    def job_reviews
        prof = Professional.find(params[:id])
        render json: prof.client, Serializer: ProfessionalJobReviewSerializer
        
    end

    private

    def signup_prof_params
        params.permit(:username, :firstname, :lastname , :description, :email, :phone, :poster, :category_id, :portfoliourl, :location, :password, :password_confirmation)
    end
end
