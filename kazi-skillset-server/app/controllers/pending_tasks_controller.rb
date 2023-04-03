class PendingTasksController < ApplicationController
    def index
        render json: PendingTask.all
    end

    def create
        pending_task = PendingTask.create(pending_task_params)
        render json: pending_task, status: :created
    end

    def destroy
        PendingTask.destroy(params[:id])
        head :no_content
    end

    def profs_pending_tasks
        render json: PendingTask.where(professional_id: params[:id])
    end

    private

    def pending_task_params
        params.permit(:task_id, :professional_id)
    end
end
