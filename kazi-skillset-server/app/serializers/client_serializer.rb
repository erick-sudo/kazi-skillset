class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :email, :phone
end
