class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, unique: true, null: false, default: ""
      t.string :profile_pic
      t.string :following
      t.string :liked_pieces
      # t.has_many :pieces

      t.timestamps null: false
    end
  end
end
