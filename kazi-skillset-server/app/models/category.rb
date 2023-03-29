class Category < ApplicationRecord
    has_many :professionals
    has_many :tasks
end
