class PendingTaskSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :professional_id
  belongs_to :task
end
