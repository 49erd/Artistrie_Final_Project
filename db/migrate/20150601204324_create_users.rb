class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :profile_pic
      t.string :following
      t.string :liked_pieces

      t.timestamps null: false
    end
  end
end
