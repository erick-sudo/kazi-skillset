class ApplicationController < ActionController::API
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def encode_token(payload)
        # payload => { beef: 'steak' }
        JWT.encode(payload, 'mysecret')
        # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
    end

    def auth_header
        # { Authorization: 'Bearer <token>' }
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          # header: { 'Authorization': 'Bearer <token>' }
          begin
            JWT.decode(token, 'mysecret', true, algorithm: 'HS256')
          rescue JWT::DecodeError
            nil
          end
        end
    end

    def current_client
        if decoded_token
          # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
          # or nil if we can't decode the token
          username = decoded_token[0]['username']
          @client = Client.find_by(username: username)
        end
    end

    def current_prof
        if decoded_token
            # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
            # or nil if we can't decode the token
            username = decoded_token[0]['username']
            @prof = Professional.find_by(username: username)
        end
    end

    def logged_in_client?
        !!current_client
    end

    def logged_in_prof?
        !!current_prof
    end

    def authorize_c
        render json: { error: "Not Authorized"}, status: :unauthorized unless logged_in_client?
    end

    def authorize_p
        render json: { error: "Not Authorized"}, status: :unauthorized unless logged_in_prof?
    end

    private

    def response_not_found
        render json: {error: "#{controller_name.classify} not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
