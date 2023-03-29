class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :professional_id, :client_id, :comment, :star_rating
end
