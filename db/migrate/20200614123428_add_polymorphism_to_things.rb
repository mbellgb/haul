class AddPolymorphismToThings < ActiveRecord::Migration[6.0]
  def change
    change_table :things do |t|
      t.references :thing, polymorphic: true
    end
  end
end
