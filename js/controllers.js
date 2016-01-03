(function (angular, mymodules) {
'use strict';

/* Controllers */

var myModules = angular.module(mymodules.modules.app.name, ['ui.bootstrap']);

myModules.run([  
    '$rootScope',
    '$location',
    //'Authorization',
    //'ENUMS',
    function ($rootScope, $location
    	//,authorization
    	//,enums
    	) {
    	alert("hello");
        $rootScope.$on('$routeChangeStart', function (event, next) {
            var authorised;
            alert("hello");
            /*if (next.access !== undefined) {
                authorised = authorization.authorize(next.access.loginRequired,
                                                     next.access.permissions,
                                                     next.access.permissionCheckType);
                if (authorised === enums.authorised.loginRequired) {
                    //$location.path(jcs.modules.auth.routes.login);
                    $location.path("/login");
                } else if (authorised === enums.authorised.notAuthorised) {
                    //$location.path(jcs.modules.auth.routes.notAuthorised).replace();
                    $location.path("/notAuthorized").replace();
                }
            }*/
        });
    }]);

myModules.controller('AppController', ['$scope', '$http', '$location',
	function($scope, $http, $location) {
alert("Hello myModules AppController");

	}]);

myModules.controller('AppHomeController', ['$scope', '$http', '$location',
	function($scope, $http, $location) {
alert(" AppHomeController");
	}]);

}(angular, mymodules));
