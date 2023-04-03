class Client < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }, presence: true, length: { minimum: 6}
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, presence: true
    validates :phone, presence: true
    validates :password, length: { minimum: 8 }

    has_many :reviews
    has_many :jobs
    has_many :tasks

    has_many :messages
    has_many :professionals, through: :messages
end
