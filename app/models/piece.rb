class Piece < ActiveRecord::Base
	belongs_to :competition
	belongs_to :user, null: false
end
