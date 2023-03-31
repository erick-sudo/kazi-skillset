class CustomClientSerializer < ActiveModel::Serializer
    attributes :firstname, :lastname, :email
end