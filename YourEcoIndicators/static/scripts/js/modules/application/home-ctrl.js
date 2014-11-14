define(['angular', './module'], function (angular, module) {
    return module.controller('HomeCtrl',['$scope',function ($scope) {
            $scope.name = "ganesh";
        }]
        );
    });