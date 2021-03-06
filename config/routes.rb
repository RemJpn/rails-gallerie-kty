Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'admin', to: 'paintings#index'
  resources :paintings, only:[:create, :update, :destroy]
  resources :themes, only:[:create, :update, :destroy]
end
