class Painting < ApplicationRecord
  belongs_to :theme

  validates :name, :theme, presence: true
end
