angular.module('myApp').controller("ExampleCtrl", [
  '$scope', function($scope){
    console.log('ExampleCtrl running');
    $scope.exampleValue = "Hello angular and rails";
}])