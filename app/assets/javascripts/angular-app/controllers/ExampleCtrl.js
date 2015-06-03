angular.module('ArtistrieApp')

.service('Pieces',function(){
	$scope.Pieces= Pieces.all();

    	$scope.Pieces = $http.get('/pieces')
    	.success(function(data){
    		console.log(data);
    		$scope.Pieces= data;
    	})
    	.error(function(data){
    		console.log("error:" + data);
    	})
})
.controller("ExampleCtrl", [
  '$scope', "Pieces", function($scope,Pieces){
    console.log('ExampleCtrl running');
    $scope.exampleValue = "Hello angular and rails";
    
}])

.controller('User',['$scope',function($scope){
	$scope.posts = [
	{
		title:'I Get Out',
		artist:'Marley'
	},
	{
		title: 'Hi',
		artist: 'Rico'
	}
	]
}]);