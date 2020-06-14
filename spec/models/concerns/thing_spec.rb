shared_examples "thing" do
  it { is_expected.to have_one(:metadata) }
end
