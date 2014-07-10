class AppController < ApplicationController
  def index
  	@user = User.all.limit(5)
  	@new_user = User.new
  end

end
