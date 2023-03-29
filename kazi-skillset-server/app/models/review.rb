class Review < ApplicationRecord
    belongs_to :job
    belongs_to :client
end
