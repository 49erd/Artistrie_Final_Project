class CompetitionsController < ApplicationController

	def index
		@user = current_user
		@competitions = Competition.all
	end

	def show
		@user = current_user
		@comp = Competition.find(params[:id])
		@pieces = Pieces.find(where: { comp_id = 2 })
      	

      	render :show
	end

end
