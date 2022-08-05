Rails.application.routes.draw do
  resources :posts
  resources :users
  resources :comments, only: [:create]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/posts/:id/hug", to: "posts#increment_hugs"
  patch "/posts/:id/withYou", to: "posts#increment_withYou"


  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end