Rails.application.routes.draw do
  resources :messages
  resources :categories
  resources :jobs
  resources :tasks
  resources :reviews
  resources :professionals
  resources :clients

  get '/professionals/:id/reviews', to: 'professionals#job_reviews'

  get '/search', to: 'professionals#filter_by_title'
  post '/login', to: 'sessions#login'
  post '/signup', to: 'clients#signup'
  get '/me_c', to: 'clients#me'

  get '/chats', to: 'messages#chat_messages'
  get '/clients/:id/chats', to: 'clients#chats'
  get '/professionals/:id/chats', to: 'professionals#chats'

  get '/me_prof', to: 'professionals#me'
  post '/login_p', to: 'sessions#logprof'
  post '/signup_p', to: 'professionals#signup'

  # patch '/reset'
  # pathc '/forgot' to: ''

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
