class AddCompIdToPieces < ActiveRecord::Migration
  def change
    add_column :pieces, :comp_id, :integer
  end
end
