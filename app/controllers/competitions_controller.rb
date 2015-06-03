class CompetitionsController < ApplicationController

	def index
		@user = current_user
		@competitions = Competition.all
	end

	def show
		@user = current_user
      	

      	render :show
	end

end
