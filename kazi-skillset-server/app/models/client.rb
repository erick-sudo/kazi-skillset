class Client < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }, presence: true

    has_many :reviews
    has_many :jobs
    has_many :tasks

    has_many :messages
    has_many :professionals, through: :messages
end
