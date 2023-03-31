class MessageSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :client, :professional_id, :content, :professional
end
