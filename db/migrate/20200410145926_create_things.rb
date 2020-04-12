class CreateThings < ActiveRecord::Migration[6.0]
  def change
    create_table :things do |t|
      t.string :name, null: false
      t.text :content, null: false
      t.string :header_image

      t.timestamps
    end
  end
end
