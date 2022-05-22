class AddColumnToFollowers < ActiveRecord::Migration[5.2]
  def change
    add_column :followers,:channel_id, :integer,null: false
    add_index :followers,:channel_id
  end
end
