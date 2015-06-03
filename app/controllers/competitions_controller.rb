class CompetitionsController < ApplicationController

	def index
		@user = current_user
	end

	def each_comp
		@comp = Competition.find(params[:id])
	end

end
