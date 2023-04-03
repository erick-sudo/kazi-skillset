class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    def create
        message = Message.create(message_params)
        render json: message
    end

    def chat_messages
        render json: Message.where(client_id: params[:c], professional_id: params[:p])
    end

    private

    def message_params
        params.permit(:client_id, :professional_id, :content, :owner)
    end
end
