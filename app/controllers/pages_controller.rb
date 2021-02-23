class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @themes = Theme.all.sort_by(&:name)
    @paintings = Painting.all
  end
end
