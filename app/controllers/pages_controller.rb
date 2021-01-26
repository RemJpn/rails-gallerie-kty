class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @themes = Theme.all.shuffle
  end
end
