Rails.application.routes.draw do
  devise_for :users
  root to: 'messages#index'
  rosources :users, only: [:edit, :update]
end
