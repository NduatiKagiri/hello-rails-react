Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'greeting', to: 'greeting#index'

  # Defines the root path route ("/")
  root "root#index"
end
