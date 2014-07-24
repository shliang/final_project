Blogger::Application.routes.draw do
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    resources :blogs, only: [:index, :create, :destroy, :show]
  end
  
  resources :users, only: [:new, :create, :show, :index]
  resource :session, only: [:new, :create, :destroy]

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
