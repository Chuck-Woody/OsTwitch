class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :owner_id, null: false
      t.integer :follower_count
      t.text :channel_description
      t.timestamps
    end
    add_index :channels, :owner_id, unique: true
  end
end
