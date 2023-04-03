class ClientsController < ApplicationController
    before_action :authorize_c
    skip_before_action :authorize_c, only: [:signup, :chats]

   def index
    render json: Client.all
   end

    def show
        prof = Client.find(params[:id])
        render json: prof
    end

    def professional
        render json: Professional.find(params[:id])
    end

    def topprofs
        render json: Professional.all.sample(8)
    end

    def job_reviews
        render json: Professional.find(params[:id]).jobs
    end

    def chats
        render json: Client.find(params[:id]).professionals.uniq
    end

    def signup
        @client = Client.create!(signup_client_params)

        if @client.valid?
            @token = encode_token(username: @client.username)
            render json: { user: ClientSerializer.new(@client), jwt: @token }, status: :created
        else
            render json: { error: 'failed to signup' }, status: :unprocessable_entity
        end
    end 

    def me
        render json: @client
    end

    private

    def signup_client_params
        params.permit(:username, :firstname, :lastname , :email, :phone, :poster, :password, :password_confirmation)
    end
end
