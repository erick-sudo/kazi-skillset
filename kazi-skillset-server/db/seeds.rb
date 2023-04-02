# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

 puts "Seeding Clients"
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
 puts "Done seeding Clients"

 job_titles = ["Plumber","Teacher", "Doctor", "Developer", "Driver", "Pilot", "Mason", "Electrician", "Architect", "Herbalist"]

 puts "Seeding Categories"
 categories = ['Health', 'Education', 'Building and Construction', 'Software Services', 'Social Services']
 categories.each do |category|
     Category.create(name: category)
 end
 puts "Done Creating Categories"

 puts "Seeding Professionals"
 200.times do
     fname = Faker::Name.first_name
     lname = Faker::Name.last_name
     Professional.create({
         job_title: job_titles.sample,
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
 puts "Done seeding Professionals"

 puts "Seeding Reviews"
 400.times do
     Review.create({
         job_id: rand(1..Job.count),
         client_id: rand(1..Client.count),
         comment: Faker::Lorem.paragraph(sentence_count: 19),
         star_rating: rand(1..10)
     })
 end
 puts "Done seeding Reviews"

 puts "Seeding Tasks"
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
 puts "Done seeding Tasks"

 puts "Seeding Jobs"
 300.times do
     Job.create({
         professional_id: rand(1..Professional.count),
         client_id: rand(1..Client.count),
         task_id: rand(1..Task.count),
     })
 end
 puts "Done seeding Jobs"

puts "Seeding Messages"
1000.times do
    Message.create({
        professional_id: rand(1..Professional.count),
        client_id: rand(1..Client.count),
        content: Faker::Lorem.sentence
    })
end
puts "Done seeding Messages"
