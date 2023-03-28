class ProfessionalSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :description, :email, :phone, :poster, :category_id, :portfoliourl, :location
end
