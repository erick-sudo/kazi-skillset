class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :proffesional_id, :client_id, :comment, :star_rating
end
