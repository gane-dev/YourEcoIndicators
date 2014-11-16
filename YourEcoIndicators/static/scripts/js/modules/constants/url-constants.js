define(['angular', './module'], function (angular, module) {
    return module.constant('urlConstants', {
        "fredData":{
            baseUrl: "",
            getSP: "/FredData/api/SP"
        }
            
    });
});