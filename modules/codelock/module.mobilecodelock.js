(function (angular, mymodules) {
    'use strict';

    mymodules.modules.mobilecodelock = {
        name: 'mymodules.mobilecodelock',
        controllers: {
            MCLAppHome : 'MobileCodeLockHomeController',
            MCLController: 'MobileCodeLockController'
        },
        routes: {
        	home: '/'
        }
    };
    angular.module(mymodules.modules.mobilecodelock.name, [
        'ngRoute'
    ]);
}(angular, mymodules));