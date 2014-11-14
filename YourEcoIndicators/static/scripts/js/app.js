define([
    'angular',
    'ui.router',
     './modules/services/index',
     './modules/application/index'
 
], function (angular) {
    'use strict';
 
    return angular.module('app', [
      'app.application',
    
      'ui.router'
  
 
    ]).config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
 
 
    }]);
});