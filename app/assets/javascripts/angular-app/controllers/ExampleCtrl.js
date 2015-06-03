angular.module('ArtistrieApp')

.service('pieces',function(){
	var pieces= [
	{id: 1, title:'I Get Out', artist: 'Marley'},
	{id: 2, title: 'So Much Things To Say', artist: 'Lauryn'},
	{id: 3, title: 'Redemption Song', artist:'Marley'}
	]
})
.controller("ExampleCtrl", [
  '$scope', "pieces", function($scope,Pieces){
    console.log('ExampleCtrl running');
    $scope.exampleValue = "Hello angular and rails";

    $scope.pieces= pieces.all();

    	// $scope.Pieces = $http.get('/pieces')
    	// .success(function(data){
    	// 	console.log(data);
    	// 	$scope.pieces= data;
    	// })
    	// .error(function(data){
    	// 	console.log("error:" + data);
    	// })
    
}]);