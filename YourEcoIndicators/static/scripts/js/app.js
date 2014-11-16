define([
    'angular',
    'ui.router',
     './modules/services/index',
     './modules/application/index',
     './modules/constants/index'
 
], function (angular) {
    'use strict';
 
    return angular.module('app', [
      'app.application',
        'app.constants',
        'app.services',
      'ui.router'
  
 
    ]).config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
 
 
    }]);
});