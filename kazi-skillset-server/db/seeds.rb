# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data"
50.times do
    fname = Faker::Name.first_name
    lname = Faker::Name.last_name
    Client.create({
        username: (fname+lname).downcase,
        firstname: fname,
        lastname: lname,
        email: "#{(fname+lname).downcase}@#{Faker::Internet.domain_name}",
        phone: rand(254700000000..254799999999),
        password: "password"
    })
end

categories = ['Health', 'Education', 'Building and Construction', 'Software Services', 'Social Services']
categories.each do |category|
    Category.create(name: category)
end

200.times do
    fname = Faker::Name.first_name
    lname = Faker::Name.last_name
    Professional.create({
        username: (fname+lname).downcase,
        firstname: fname,
        lastname: lname,
        description: Faker::Lorem.paragraph(sentence_count: 30),
        email: "#{(fname+lname).downcase}@#{Faker::Internet.domain_name}",
        phone: rand(254700000000..254799999999),
        poster: "https://png.pngitem.com/pimgs/s/2-22912_laptop-girl-smile-woman-computer-female-young-girl.png",
        category_id: rand(1..5),
        portfoliourl: "https://horus-logistics.vercel.app",
        location: "#{Faker::Address.city}, #{Faker::Address.country}, #{Faker::Address.mail_box}",
        password: "password"
    })
end

400.times do
    Review.create({
        professional_id: rand(1..Professional.count),
        client_id: rand(1..Client.count),
        comment: Faker::Lorem.paragraph(sentence_count: 19),
        star_rating: rand(1..10)
    })
end

500.times do
    Task.create({
        category_id: rand(1..Category.count),
        client_id: rand(1..Client.count),
        description: Faker::Lorem.paragraph(sentence_count: 20),
        start_date: DateTime.now,
        location: "#{Faker::Address.city}, #{Faker::Address.country}, #{Faker::Address.mail_box}",
        budget: rand(156..599432)
    })
end

300.times do
    Job.create({
        professional_id: rand(1..Professional.count),
        client_id: rand(1..Client.count),
        task_id: rand(1..Task.count),
    })
end

puts "Done Creating Categories"