define([
  'require',
  'angular',
  './app'
], function (require, angular) {
    'use strict';

    // You can place operations that need to initialize prior to app start here
    // using the `run` function on the top-level module

    require(['domReady!'], function (document) {
        // everything is loaded...go!
        angular.bootstrap(document, ['app']);
    });
});