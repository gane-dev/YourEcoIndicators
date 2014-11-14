define([
     'angular',
     'ui.router'
],
    function (angular) {
    'use strict';
    return angular.module('app.application', [
          'ui.router'
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('application', {
            url:"/home",
            views: {
                "@": {
                    templateUrl: '/static/scripts/js/modules/application/home.html',
                    controller: 'HomeCtrl'
                }
            },
            resolve: {
                promiseData: function () {
                    return 1;
                }
            }
        })
        
}]);
});