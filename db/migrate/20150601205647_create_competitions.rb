class CreateCompetitions < ActiveRecord::Migration
  def change
    create_table :competitions do |t|
      t.string :title
      t.string :theme
      t.date :contest_start
      t.date :contest_end
      # t.has_many :pieces

      t.timestamps null: false
    end
  end
end
