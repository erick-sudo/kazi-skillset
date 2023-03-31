class CustomReviewSerializer < ActiveModel::Serializer
    attributes :comment, :star_rating, :client_id
end