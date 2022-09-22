Rails.application.routes.draw do
  namespace :api do
    resources :reviews
  end
  
end
