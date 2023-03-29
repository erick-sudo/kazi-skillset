class TaskSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :category_id, :description, :start_date, :location, :budget
end
