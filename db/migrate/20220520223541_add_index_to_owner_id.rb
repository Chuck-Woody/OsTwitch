class AddIndexToOwnerId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :channels, :owner_id, false
    add_index :channels, :owner_id
  end
end
