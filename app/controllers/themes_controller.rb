class ThemesController < ApplicationController
  def create
    @theme = Theme.new(theme_params)

    if @theme.save
      redirect_to admin_path
    else
      @add_error = true
      @paintings = Painting.all
      render 'paintings/index'
    end
  end

  def update
    @theme = Theme.find(params[:id])
    @theme.update(theme_params)
    redirect_to admin_path
  end

  def destroy
    @theme = Theme.find(params[:id])
    @theme.destroy
    redirect_to admin_path
  end

  private

  def theme_params
    params.require(:theme).permit(:name)
  end
end
