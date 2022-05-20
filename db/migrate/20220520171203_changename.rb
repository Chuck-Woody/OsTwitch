class Changename < ActiveRecord::Migration[5.2]
  def change
    rename_table :followers, :follows
  end
end
