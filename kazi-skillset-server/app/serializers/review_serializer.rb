class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :client_id, :comment, :star_rating
end
