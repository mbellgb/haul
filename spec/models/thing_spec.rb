require 'rails_helper'
require "factory_bot"

RSpec.describe Thing, type: :model do
  it "must validate name" do
    expect(build(:thing)).to be_valid
    expect(Thing.new).not_to be_valid
  end
  it "can include an image" do
    thing = build(:thing, has_image: true)
    expect(thing).to be_valid
  end
end
