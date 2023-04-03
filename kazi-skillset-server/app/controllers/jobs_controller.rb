class JobsController < ApplicationController
    def index
        render json: Job.all
    end

    def show
        render json: Job.find(params[:id])
    end

    def create
        job = Job.create(job_params)
        render json: job, status: :created
    end

    def destroy
        Job.destroy(params[:id])
        head :no_content
    end

    private

    def job_params
        params.permit(:client_id, :professional_id, :task_id)
    end
end
