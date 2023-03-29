class JobSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :professional_id, :task_id
end
