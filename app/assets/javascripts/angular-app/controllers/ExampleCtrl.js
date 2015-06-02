angular.module('myApp')

.controller("ExampleCtrl", [
  '$scope', function($scope){
    $scope.posts = [
    {
    	title:'I Get Out',
    	artist: 'Marley'
    }, 
    {
    	title:'So Much Things To Say',
    	artist: 'Ms.Hill'
    }
    ];
}]);