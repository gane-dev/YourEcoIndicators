define(['angular', './module'], function (angular, module) {
    return module.factory('getFredData',['$q', 'webApiCalls','urlConstants',function ($q,webApiCalls,urlConstants) {
           var getDataFunctions = {
               getSPData: getSPData
           };

           return getDataFunctions;
           function getSPData()
           {
               var deferred = $q.defer();
               webApiCalls.httpGetCall(urlConstants.getSP).
                   then(function(data)
                   {
                       return data;
                   }
                   ).catch(function (status) {
                       return status;
        });
               return deferred.promise;
           }
        }]);
});