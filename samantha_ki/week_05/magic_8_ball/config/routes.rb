Rails.application.routes.draw do

  root "pages#home"

  get "/home" => "pages#home"

  get "/questions" => "pages#index"

  get "/ask" => "pages#ask"
  post "/questions" => "pages#add"
  get "/answer" => "pages#answer"

  get "/questions/:id" => "pages#show"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
