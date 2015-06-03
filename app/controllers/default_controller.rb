class DefaultController < ApplicationController
before_action :authenticate_user!
	def index
		@user = current_user
	end

	def contact
		@user = current_user
	end

end
