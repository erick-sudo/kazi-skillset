Rails.application.routes.draw do
  resources :pending_tasks
  resources :messages
  resources :categories
  resources :jobs
  resources :tasks
  resources :reviews
  resources :professionals
  resources :clients

  get '/professionals/:id/reviews', to: 'professionals#job_reviews'
  get '/clients/:id/reviews', to: 'clients#job_reviews'
  get '/clients_profs/:id', to: 'clients#professional'

  get '/search', to: 'professionals#filter_by_title'
  post '/login', to: 'sessions#login'
  post '/signup', to: 'clients#signup'
  get '/me_c', to: 'clients#me'
  get '/topprofs', to: 'clients#topprofs'

  get '/chats', to: 'messages#chat_messages'
  get '/clients/:id/chats', to: 'clients#chats'
  get '/professionals/:id/chats', to: 'professionals#chats'

  get '/me_prof', to: 'professionals#me'
  post '/login_p', to: 'sessions#logprof'
  post '/signup_p', to: 'professionals#signup'

  get '/pendingtasks/:id', to: 'pending_tasks#profs_pending_tasks'

  # patch '/reset'
  # pathc '/forgot' to: ''

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
