Blogger::Application.routes.draw do
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:index, :create, :destroy, :show]
    resources :users, only: [:index] do
      get :recommended, on: :collection
    end
    resources :userfollows, only: [:create, :destroy]
  end
  
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  
end
