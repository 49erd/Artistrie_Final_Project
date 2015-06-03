angular.module('ArtistrieApp').controller("CompCtrl", [
  '$scope', function ($scope) {
  	console.log('CompCtrl running');
    $scope.compValue = "Here is the competition page";
  }])