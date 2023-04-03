class Professional < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }, presence: true, length: { minimum: 8 }
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :email, presence: true
    validates :job_title, presence: true
    validates :phone, presence: true
    validates :category_id, presence: true
    validates :password_digest, presence: true

    belongs_to :category
    has_many :jobs
    has_many :messages
    has_many :clients, through: :messages
    has_many :pending_tasks
end
