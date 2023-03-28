class TaskSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :description, :start_date, :location, :budget
end
