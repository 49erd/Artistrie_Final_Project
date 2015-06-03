class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
      t.string :title
      t.string :artist
      t.string :type
      t.string :image_url
      t.integer :likes
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
