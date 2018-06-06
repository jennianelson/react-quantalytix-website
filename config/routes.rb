Rails.application.routes.draw do
  resources :contacts, only: [:create, :destroy]
end