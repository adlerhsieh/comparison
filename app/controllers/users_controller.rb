class UsersController < ApplicationController
  def index
  end

  def create
  	@user = User.new(user_params)
  	@user.save
  	redirect_to root_url
  end

  def destroy
  	@user = User.find(params[:id])
  	@user.destroy
  	redirect_to root_url
  end

  private
  	def user_params
  		params.require(:user).permit(:name, :score)
  	end
end
