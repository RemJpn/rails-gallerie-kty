class Painting < ApplicationRecord
  belongs_to :theme
  has_one_attached :photo

  validates :name, :theme, :photo, :year, presence: true
end
