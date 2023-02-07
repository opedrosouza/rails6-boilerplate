# frozen_string_literal: true

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  devise_for :users,
             path: "",
             class_name: "User",
             controllers: {
               sessions: "users/sessions",
               registrations: "users/registrations",
               confirmations: "users/confirmations",
               passwords: "users/passwords",
               unlocks: "users/unlocks",
             },
             path_names: {
               sign_in: "entrar",
               sign_up: "cadastrar",
               sign_out: "sair",
               password: "senha",
               confirmation: "confirmar",
               unlock: "desbloquear",
             }

  authenticated do
    root to: "home#index", as: "authenticated_root"
  end

  unauthenticated do
    devise_scope :user do
      root to: "users/sessions#new"
    end
  end
end
