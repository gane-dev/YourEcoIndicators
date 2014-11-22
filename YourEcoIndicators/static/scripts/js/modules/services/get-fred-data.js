define(['angular', './module'], function (angular, module) {
    return module.factory('getFredData',['$q', 'webApiCalls','urlConstants',function ($q,webApiCalls,urlConstants) {
           var getDataFunctions = {
               getSPData: getSPData
           };

           return getDataFunctions;
           function getSPData()
           {
               var deferred = $q.defer();
               webApiCalls.httpGetCall(urlConstants.fredData.getSP).
                   then(function(data)
                   {
                       
                       deferred.resolve(transformData(data));
                   }
                   ).catch(function (status) {
                       $q.reject(status);
        });
               return deferred.promise;
           }
           function transformData(data)
           {
               var transformedData = [];
               for (key in data) {
                   if (data.hasOwnProperty(key)) {
                       if (data[key] != null) {
                           var temp = { "label": key, "value": parseFloat(data[key]) };
                           transformedData.push(temp);
                       }
                   }
               }
               var data = [{
                   key: "Cumulative Return",
                   values: transformedData
               }];
               return data;
               
           }
        }]);
});