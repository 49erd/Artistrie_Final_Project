class AddLikesTotalToUsers < ActiveRecord::Migration
  def change
    add_column :users, :likes_total, :integer
  end
end
