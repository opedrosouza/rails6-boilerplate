# frozen_string_literal: true

module Storefront
  # Storefront::HomeController class is the root client controller
  class HomeController < ApplicationController
    def index
      flash[:error] = 'Sample error alert...'
      flash[:notice] = 'Sample success alert...'
      flash[:alert] = 'Sample warning alert...'
    end
  end
end
