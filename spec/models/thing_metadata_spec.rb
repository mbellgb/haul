require "rails_helper"
require "factory_bot"

RSpec.describe ThingMetadata, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.not_to validate_presence_of(:header_image) }
  it { is_expected.to belong_to(:thing) }
end
