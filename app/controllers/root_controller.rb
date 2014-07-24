class RootController < ApplicationController
  before_filter :sign_in_required
  def root
  end
end
