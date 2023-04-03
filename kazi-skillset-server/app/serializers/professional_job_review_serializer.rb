class ProfessionalJobReviewSerializer < ActiveModel::Serializer
    attributes  :id, :firstname, :lastname, :description 
    has_many :reviews
    #has_many :clients
  end