# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Categories"
categories = ['Health', 'Education', 'Building and Construction', 'Software Services', 'Social Services']
categories.each do |category|
    Category.create(name: category)
end
puts "Done Creating Categories"