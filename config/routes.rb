Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :things, only: [:index, :create, :update, :destroy, :show]
    end
    get '/*path' => 'api#not_found'
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
