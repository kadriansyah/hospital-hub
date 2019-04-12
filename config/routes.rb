Rails.application.routes.draw do

    devise_for :core_user,
                class_name: 'Admin::CoreUser',
                module: :devise,
                path: 'admin',
                path_names: { sign_in: 'login', sign_out: 'logout' },
               :controllers => {
                   sessions: 'admin/core_user/sessions',
                   registrations: 'admin/core_user/registrations',
                   passwords: 'admin/core_user/passwords'
               }

    root to: 'index#index'

    scope :admin do
        root to: 'admin#index', :as => "admin"
        get 'page/:name', to: 'admin#page'

        # http://guides.rubyonrails.org/routing.html#adding-more-restful-actions
        resources :users, controller: 'admin/users', except: :destroy do
            get 'delete', on: :member
        end

        resources :groups, controller: 'admin/groups', except: :destroy do
            get 'delete', on: :member
        end

        resources :hospitals, controller: 'alo/hospitals', except: :destroy do
            get 'delete', on: :member
        end
    end

    get 'tinymce',  to: 'core/articles#tinymce'
    resources :articles, param: :slug, controller: 'index', path: '/', only: :show
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
