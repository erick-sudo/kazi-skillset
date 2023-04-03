class PendingTask < ApplicationRecord
    belongs_to :professional
    belongs_to :task
end
