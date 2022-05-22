class CreateVods < ActiveRecord::Migration[5.2]
  def change
    create_table :vods do |t|
      t.integer :channel_id, null: false
      t.string :title, null: false
      t.string :category, null: false
      t.timestamps
    end
  end
end
