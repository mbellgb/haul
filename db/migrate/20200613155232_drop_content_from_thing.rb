class DropContentFromThing < ActiveRecord::Migration[6.0]
  def change
    change_table :things do |t|
      t.remove :content
    end
  end
end
