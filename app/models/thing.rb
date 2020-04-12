class Thing < ApplicationRecord
    validates :name, presence: true
    validates :content, presence: true
    validates :header_image, presence: false
end
