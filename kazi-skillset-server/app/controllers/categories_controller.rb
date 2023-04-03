class CategoriesController < ApplicationController
    
    def index
        render json: Category.all
    end

    def create
        cat = Category.create!(name: params[:name])
        render json: cat, status: :created
    end
end
