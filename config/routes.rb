Rails.application.routes.draw do
  namespace :api do
    resources :account
  end
end