module Thing
  extend ActiveSupport::Concern

  included do
    has_one :metadata, as: :thing, class_name: "ThingMetadata"
    accepts_nested_attributes_for :metadata
  end
end
