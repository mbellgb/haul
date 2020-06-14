class ThingMetadata < ApplicationRecord
  validates :name, presence: true
  validates :header_image, presence: false
  belongs_to :thing, polymorphic: true

  def as_json(options = nil)
    super({ include: :thing }.merge(options || {}))
  end
end
