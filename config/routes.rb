Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show]
    resources :reviews, only: [:create]
    resources :cart_items, only: [:create, :index, :update, :destroy]
  end
  root "static_pages#root"
end