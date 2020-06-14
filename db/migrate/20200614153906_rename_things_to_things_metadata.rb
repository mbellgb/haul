class RenameThingsToThingsMetadata < ActiveRecord::Migration[6.0]
  def change
    rename_table :things, :thing_metadata
  end
end
