class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:login]

  def login
    client = Client.find_by(username: login_params[:username])
    if client&.authenticate(login_params[:password])
        session[:username] = client.username
        return render json: client, status: :created
    end

    render json: { error: "Invalid username or password"}, status: :not_found
  end

  def logprof
    prof = Professional.find_by(username: login_params[:username])
    if prof&.authenticate(login_params[:password])
        session[:username] = prof.username
        return render json: prof, status: :created
    end

    render json: { error: "Invalid username or password"}, status: :not_found
  end

  private

  def login_params
    params.permit(:username, :password)
  end
end
