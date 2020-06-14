FactoryBot.define do
  factory :thing do
    transient do
      has_image { false }
    end
    name { "Test Thing" }

    after :create do |thing, options|
      thing.header_image = "test.png" if options.has_image
    end
  end
end
