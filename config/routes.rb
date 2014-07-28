Blogger::Application.routes.draw do
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:index, :create, :update, :destroy, :show]
    resources :users, only: [:index] do
      get :userfollows, on: :collection
    end
    resources :userfollows, only: [:create, :destroy, :index, :show]
  end
  
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  
end
