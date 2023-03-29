class ProfessionalSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :description, :email, :phone, :poster, :category_id, :portfoliourl, :location
end
