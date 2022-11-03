Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      resources :greetings
    end
  end

  get '*page', to: 'greeting#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }

  # Defines the root path route ("/")
  root "greeting#index"
end
