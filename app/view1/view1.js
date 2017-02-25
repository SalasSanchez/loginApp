'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
	$scope.user = {};

	$scope.checkSubmit = function(user){
		$scope.user = user;
		console.dir($scope.user);
		if(user.password !== user.passwordConf){
			$scope.message = "The passwords do not match";
		}
	}
}]);