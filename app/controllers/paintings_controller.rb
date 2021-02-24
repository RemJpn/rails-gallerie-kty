class PaintingsController < ApplicationController
  def index
    @themes = Theme.all.sort_by(&:name)
    @paintings = Painting.all

    @painting = Painting.new
    @theme = Theme.new
  end

  def create
    @painting = Painting.new(painting_params)
    @painting.theme = Theme.find(painting_params[:theme_id])

    # binding.pry
    # source_data = File.read(@painting.photo.key)
    # @painting.photo = Tinify.from_buffer(source_data).to_buffer
    # source = Tinify.from_file(@painting.photo)
    # source.to_file(@painting.photo)

    if @painting.save
      redirect_to admin_path
    else
      @add_error = true
      @themes = Theme.all
      render 'paintings/index', data: { remote: true, toggle: "modal", target: "#paintingModal" }
    end
  end

  def update
    @painting = Painting.find(params[:id])
    @painting.update(painting_params)
    redirect_to admin_path
  end

  def destroy
    @painting = Painting.find(params[:id])
    @painting.destroy
    redirect_to admin_path
  end

  private

  def painting_params
    params.require(:painting).permit(:name, :year, :dimensions, :theme_id, :number, :sold, :description, :photo)
  end
end
