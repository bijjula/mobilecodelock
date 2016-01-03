( function(angular, mymodules) {'use strict';

	// Declare app level module which depends on filters, and services
	angular.module('myModules', ['ngRoute', 'ngResource', 'ui.bootstrap'])
	.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : 'html/home.html',
			controller : 'AppHomeController'
		});

		$routeProvider.when('/home', {
			templateUrl : 'html/home.html',
			controller : 'AppHomeController'
		});
		$routeProvider.otherwise({
			redirectTo : '/'
		});

	}]);
}(angular, mymodules));
