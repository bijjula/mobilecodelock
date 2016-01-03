(function (angular, mymodules) {
'use strict';

/* Controllers */

var myModules = angular.module(mymodules.modules.mobilecodelock.name, ['ui.bootstrap']);

myModules.controller(mymodules.modules.mobilecodelock.controllers.MCLAppHome, ['$scope', '$http', '$location',
	function($scope, $http, $location) {

	}]);

myModules.controller(mymodules.modules.mobilecodelock.controllers.MCLController, ['$scope', '$http', '$location',
	function($scope, $http, $location) {

	}]);

}(angular, mymodules));
