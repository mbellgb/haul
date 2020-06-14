require 'rails_helper'
require 'models/concerns/thing_spec'

RSpec.describe TextThing, type: :model do
  it { is_expected.to validate_presence_of(:content) }
  it_behaves_like "thing"
end
