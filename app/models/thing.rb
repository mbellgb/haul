class Thing < ApplicationRecord
  validates :name, presence: true
  validates :header_image, presence: false
  belongs_to :thing, polymorphic: true
end
