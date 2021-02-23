class Theme < ApplicationRecord
  has_many :paintings

  validates :name, presence: true, uniqueness: true
end
