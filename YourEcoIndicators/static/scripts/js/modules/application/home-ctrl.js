﻿define(['angular', './module'], function (angular, module) {
    return module.controller('HomeCtrl', ['$scope', 'getFredData', '$q', function ($scope, getFredData,
        $q) {
        $scope.name = "ganesh";
        getFredData.getSPData().
                   then(function (data) {
                       $scope.data =data;
                   }
                   ).catch(function (status) {
                       alert(status);
                   });
        
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };
        }]
        );
    });