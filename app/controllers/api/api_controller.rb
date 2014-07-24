module Api
  class ApiController < ApplicationController
  before_filter :sign_in_required
  end
end