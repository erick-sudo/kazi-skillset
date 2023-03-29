class Task < ApplicationRecord.
    belongs_to :client
    validates :description, length: {minimum: 20}, presence: true
    validates :location, presence: true
end
