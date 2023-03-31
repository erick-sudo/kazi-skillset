class ApplicationController < ActionController::API
    #before_action :authorize
    include ActionController::Cookies
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    private

    def response_not_found
        render json: {error: "#{controller_name.classify} not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        render json: { error: "Not Authorized"}, status: :unauthorized unless session.include? :username
    end
end
