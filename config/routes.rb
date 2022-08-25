Rails.application.routes.draw do
  get 'home/index'
  get 'home/scan', defaults: { format: 'php' }
  get 'home/exploit', defaults: { format: 'php' }
  root to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
