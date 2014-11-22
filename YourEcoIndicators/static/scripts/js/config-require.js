define({
  
    paths: {
        'jquery': 'scripts/js/vendor/jquery-1.10.2',
        'jquery-ui': 'scripts/js/vendor/jquery-ui',
        'angular': 'scripts/js/vendor/angular',
        'async': 'scripts/js/vendor/async',
        'domReady': 'scripts/js/vendor/domReady',
        'ui.router': 'scripts/js/vendor/angular-ui-router',
        //'d3': 'scripts/js/vendor/d3.min',
        'nv': 'scripts/js/vendor/nv.d3',
        'nvd3':'scripts/js/vendor/angular-nvd3'
    },

    shim: {
        'angular': {
            'deps': ['jquery', 'jquery-ui'],
            'exports': 'angular'
        },
        'ui.router': {
            'deps': ['angular'],
          
        }
        //,
        //'d3': {
        //    'deps': ['angular'],

        //}
        ,
        'nv': {
            'deps': ['angular'],

        }
        ,
        'nvd3': {
            'deps': ['nv','angular'],

        }
       
        }
    
});