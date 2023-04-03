class ReviewsController < ApplicationController
    def index
        render json: Review.all
    end

    def destroy
        Review.destroy(params[:id])
        head :no_content
    end
end
