class PaintingsController < ApplicationController
  def index
    @themes = Theme.all
    @paintings = Painting.all

    @painting = Painting.new
  end

  def create
    @painting = Painting.new(painting_params)
    @painting.theme = Theme.find(painting_params[:theme_id])

    if @painting.save
      redirect_to admin_path
    else
      @add_error = true
      @themes = Theme.all
      render 'paintings/index', data: {remote: true, toggle: "modal", target: "#paintingModal"}
    end
  end



  private

  def painting_params
    params.require(:painting).permit(:name, :year, :dimensions, :theme_id, :number, :sold, :description, :photo)
  end

end
