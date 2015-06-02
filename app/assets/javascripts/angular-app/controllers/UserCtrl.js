angular.module('ArtistrieApp')
	.controller('ArtistCtrl', ['$scope', function ($scope) {
		$scope.pieces = db.Pieces.findAll( where: { id = current_user.id })
		$scope.addLike() = function (piece) {
			piece.likes += 1;
		};
	}])