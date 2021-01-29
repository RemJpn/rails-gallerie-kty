class PaintingsController < ApplicationController
  def index
    @themes = Theme.all.shuffle
    @paintings = Painting.all
  end
end
