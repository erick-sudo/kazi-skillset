class JobSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :client, serializer: CustomClientSerializer
  belongs_to :task, serializer: CustomTaskSerializer
  has_many :reviews, serializer: CustomReviewSerializer
end
