angular.module('ArtistrieApp')
.factory('pieces', [function(){
	var pieces = [
		{id: 1, title:'I Get Out', artist:'Marley'},
		{id: 2, title:'So Much Things To Say', artist:'Hill'}
	]
	return{
		all: function(){
			return pieces
		}
	}
}]);