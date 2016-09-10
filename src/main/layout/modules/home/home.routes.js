export default function routes($stateProvider) {
  
  $stateProvider
    .state('layout.home.base', {
    	url: '/',
    	views: {
            'performance': {
                template: require('./partials/performance.html'),
                controller: 'PerformanceController',
                controllerAs: 'perf'
            },
            'filters': {
                template: require('./partials/filters.html'),
                controller: 'FiltersController',
                controllerAs: 'filter'
            },
    		'leftquad': {
    			template: require('./partials/tabsPortIdeaCont.html'),
    			controller: 'TabsController',
    			controllerAs: 'section'
    		},
    		'rightquad': {
    			template: require('./partials/tabItemDetail.html'),
    			controller: 'DetailsController',
    			controllerAs: 'details'
    		}
    	}
    });
}