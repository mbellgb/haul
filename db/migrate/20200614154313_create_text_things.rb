class CreateTextThings < ActiveRecord::Migration[6.0]
  def change
    create_table :text_things do |t|
      t.text :content

      t.timestamps
    end
  end
end
