define(['angular', './module'], function (angular, module) {
    return module.factory('webApiCalls', ['$http', '$q', function ($http, $q) {
           var getApis = {
               httpPostCallWithParam: httpPostCallWithParam,
               httpGetCall: httpGetCall
           };

           return getApis;
           function httpPostCallWithParam(url, param) {
               var deferred = $q.defer();
            /*   $http({ method: 'POST', url: url,data:param }).
        success(function (data, status) {
            deferred.resolve(data);
        }).
        error(function (data, status) {
            $q.reject(status);
        });*/
               return deferred.promise;
           }
           function httpGetCall(url) {
               var deferred = $q.defer();
               $http.get(url).
        success(function (data) {
            deferred.resolve(data);
        }).
        error(function ( status) {
            $q.reject(status);
        });
               return deferred.promise;
           }

       }]);
});