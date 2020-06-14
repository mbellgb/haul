require 'rails_helper'

RSpec.describe Thing, type: :model do
  it "must validate name" do
    thing = Thing.new(name: "Test")
    expect(thing).to be_valid
    expect(Thing.new).to_not be_valid
  end
  it "can include an image" do
    thing = Thing.new(name: "Test", header_image: "foobar")
    expect(thing).to be_valid
  end
end
