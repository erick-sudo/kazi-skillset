# Professional >-- Category
Professional belongs to category
Category has many proffesionals

# Review >-- Job
Review belongs to a job
Job has many reviews

# Review >-- Client
Client has many reviews
Has one client.

# Client --< Job
Client has many jobs
Job belongs client

# Professional --< Job
Professional has many jobs
Job belongs professional

# Task --< Client
Client has many tasks
Task belongs client