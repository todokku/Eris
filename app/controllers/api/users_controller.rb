class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(id: params[:userId]);
    if @user && @user.is_password(params[:password]) && @user.update(user_params)
      render :show
    else
      render json: @user ? @user.errors.full_messages : ["The given user or password is incorrect"], status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(id: params[:userId])
    if @user
      render :show
    else
      render json: ["This user does not exist"], status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :profile_picture, :new_password)
  end
end
