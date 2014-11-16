define([
     'angular',
     'ui.router',
     'nvd3'
],
    function (angular) {
    'use strict';
    return angular.module('app.application', [
          'ui.router',
          'nvd3',
          'app.constants',
          'app.services',
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('application', {
            url:"/home",
            views: {
                "@": {
                    templateUrl: '/static/scripts/js/modules/application/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        
}]);
});