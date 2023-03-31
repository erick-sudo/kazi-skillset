class Job < ApplicationRecord
    has_many :reviews
    belongs_to :client
    belongs_to :task
end
