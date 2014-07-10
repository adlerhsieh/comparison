class AppController < ApplicationController
  def index
  	@user = User.all.order("score DESC").limit(5)
  	@new_user = User.new
  end

end
