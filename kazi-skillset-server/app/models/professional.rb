class Professional < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }, presence: true, length: { minimum: 8 }
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, presence: true
    validates :location, presence: true
    belongs_to :category
    has_many :jobs
    has_many :clients, through: :jobs
end
