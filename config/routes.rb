Blogger::Application.routes.draw do
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:create, :update, :destroy, :show]
    resources :users, only: [:index] do
      get :userfollows, on: :collection
      resources :posts, only: [:index]
    end
    resources :userfollows, only: [:create, :destroy, :index, :show]
  end
  
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  
end
