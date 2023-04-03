class SessionsController < ApplicationController

  def login
    @client = Client.find_by(username: login_params[:username])

    if @client&.authenticate(login_params[:password])
      token = encode_token({ username: @client.username })
      render json: { user: ClientSerializer.new(@client), jwt: token  }, status: :accepted
    else
      render json: { error: "Invalid username or password"}, status: :not_found
    end
  end

  def logprof
    @prof = Professional.find_by(username: login_params[:username])
    if @prof&.authenticate(login_params[:password])
      token = encode_token({ username: @prof.username })
      render json: { user: ProfessionalSerializer.new(@prof), jwt: token  }, status: :accepted
    else
      render json: { error: "Invalid username or password"}, status: :not_found
    end
  end

  private

  def login_params
    params.permit(:username, :password)
  end
end
