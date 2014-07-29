Blogger::Application.routes.draw do
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:create, :update, :destroy, :show]
    resources :users, only: [:index] do
      get :userfollows, on: :collection
      resources :blogs, only: [:index]
    end
    resources :userfollows, only: [:create, :destroy, :index, :show]
  end
  
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  
end
