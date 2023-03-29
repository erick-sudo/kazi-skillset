class Client < ApplicationRecord
    has_secure_password
    #setting validations for some fields to ensure correct data
    validates :username, uniqueness: { case_sensitive: false }, presence: true
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, presence: true
    has_many :reviews
    has_many :jobs
    has_many :tasks
end
