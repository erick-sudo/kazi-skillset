class Review < ApplicationRecord
    belongs_to :job
    has_one :client
end
