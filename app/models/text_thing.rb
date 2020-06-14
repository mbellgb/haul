class TextThing < ApplicationRecord
  validates :content, presence: true
  include Thing
end
