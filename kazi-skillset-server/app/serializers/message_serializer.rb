class MessageSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :professional_id, :content, :owner, :created_at
end
