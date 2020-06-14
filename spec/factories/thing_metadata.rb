FactoryBot.define do
  factory :thing_metadata do
    transient do
      has_image { false }
    end
    name { "Test Thing" }

    after :create do |meta, options|
      meta.header_image = "test.png" if options.has_image
    end
  end
end
