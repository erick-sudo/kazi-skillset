Rails.application.routes.draw do
  resources :categories
  resources :jobs
  resources :tasks
  resources :reviews
  resources :professionals
  resources :clients
  post '/login', to: 'sessions#login'
  post '/signup', to: 'clients#signup'
  get '/me_c', to: 'clients#me'

  get '/me_prof', to: 'professionals#me'
  post '/login_p', to: 'sessions#logprof'
  post '/signup_p', to: 'professionals#signup'

  # patch '/reset'
  # pathc '/forgot' to: ''

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
