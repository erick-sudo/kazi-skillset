# KAZI-SKILLSET APP

# KAZI-SKILLSET APP

## Future Developments
- Payment Integration
- Job specific reviews

## Models

## Category
Health
Education
Building and Construction
Software services
Social services
    a. Cleaning
    b. Hospitality
    c. Security services
    d. Events management
    e. Gardening and landscaping
Other - Specify

## Client
firstname           string
lastname            string
email               string
phone               integer

rails g resource Client firstname lastname email phone --no-test-framework

## Professional
firstname           string
lastname            string
description         string
email               text
phone               integer
poster              string
category_id         integer
portfolio_url       string
location            string

rails g resource Professional firstname lastname description email phone:integer poster category_id:integer portfoliourl location --no-test-framework

## Review
proffesional_id     integer
client_id           integer
comment             text
star_rating         integer

rails g resource Review proffesional_id:integer client_id:integer comment:string star_rating:integer --no-test-framework

## Job
client_id           integer
proffesional_id     integer
task_id             integer

rails g resource Job client_id:integer proffesional_id:integer task_id:integer  --no-test-framework

## Task
client_id           integer
description         text
start_date           date
location            string
budget              decimal, default negotiable

rails g resource Task client_id:integer description start_date:datetime location budget:decimal --no-test-framework



## Jira
Identification of the project
Created a rails and react project
Hosted the minimum source code on GitHub
Designed the structure and components

Create figma UI design
Identification of application components
Creating a landing page
Configure client side routing
Created Signup and Login components
Cards [Professional, ]

Identified the models
Create entity relationships


A user should be authenticated to register and login.
Client can can search and filter Jobs by category, location, budget, reviews, star_ratings.
Client can book a proffesional and cancel a task.
Can mark a job as incomplete or complete.
Client can update/patch task.
Reviews and star ratings about a proffesional.

Proffesional authentication to authorization.
Proffesional can create, update, edit profile.
Proffesional can accept or decline job request.
Switch location

## Components
Navbar
Tasks route=tasks
    - ClientTask
    - ProffesionalTask4

Footer
Signup route=signup
Login route=login

JobCard - Describe contract [Complete\Incomplete - Client]
TaskCard - Describes task [Accept/Decline - Professional, Cancel/Update - Client]

ProfessionalCard
Profile [include reviews] route=profiles/prof_id
NewTaskForm
HistoryCard -- Description previous jobs (List of jobs)