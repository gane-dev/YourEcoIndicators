define({
  
    paths: {
        'jquery': 'scripts/js/vendor/jquery-1.10.2',
        'jquery-ui': 'scripts/js/vendor/jquery-ui',
        'angular': 'scripts/js/vendor/angular',
        'async': 'scripts/js/vendor/async',
        'domReady': 'scripts/js/vendor/domReady',
        'ui.router': 'scripts/js/vendor/angular-ui-router'
    },

    shim: {
        'angular': {
            'deps': ['jquery', 'jquery-ui'],
            'exports': 'angular'
        },
        'ui.router': {
            'deps': ['angular'],
          
        }
       
        }
    
});