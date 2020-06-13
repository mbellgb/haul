require 'rails_helper'

RSpec.describe Thing, type: :model do
  it "must validate name" do
    expect { Thing.create!  }.to raise_error(ActiveRecord::RecordInvalid)
  end
end
