class ProfessionalSerializer < ActiveModel::Serializer
  attributes :id, :job_title, :username, :firstname, :lastname, :description, :email, :phone, :poster, :category_id, :portfoliourl, :location
  belongs_to :category
  has_many :jobs
end
