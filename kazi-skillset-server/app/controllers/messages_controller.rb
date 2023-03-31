class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    def chat_messages
        render json: Message.where(client_id: params[:c], professional_id: params[:p])
    end
end
