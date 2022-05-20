class RemoveColumnsFromFollowers < ActiveRecord::Migration[5.2]
  def change
    remove_column(:followers,:user_id,:integer)
  end
end
