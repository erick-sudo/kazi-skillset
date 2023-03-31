class ClientsController < ApplicationController
    # skip_before_action :authorize, only: [:signup]

   def index
    render json: Client.all
   end

    def show
        prof = Client.find(params[:id])
        render json: prof
    end

    def signup
        client = Client.create!(signup_client_params)
        render json: client, status: :created
    end 

    def me
        client = Client.find_by(username: session[:username])
        render json: client
    end

    private

    def signup_client_params
        params.permit(:username, :firstname, :lastname , :email, :phone, :password, :password_confirmation)
    end
end
