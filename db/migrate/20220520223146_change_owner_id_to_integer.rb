class ChangeOwnerIdToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :owner_id, :string
    add_column :channels, :owner_id, :integer
  end
end
