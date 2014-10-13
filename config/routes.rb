Blogger::Application.routes.draw do
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    
    resources :posts, only: [:create, :update, :destroy, :show] do
      resources :comments, only: [:index]
    end
    
    resources :comments, only: [:create, :update, :destroy]
    
    resources :users, only: [:index, :show, :update] do
      get :followees, on: :collection
      get :followers, on: :collection
    end
    
    resources :likes, only: [:create, :destroy, :index]
    resources :userfollows, only: [:create, :destroy, :index]
  end
  
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
end
