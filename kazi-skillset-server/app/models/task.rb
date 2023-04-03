class Task < ApplicationRecord
    belongs_to :client
    belongs_to :category
    has_many :pending_tasks
end
