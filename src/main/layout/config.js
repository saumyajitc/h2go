export default function routing($stateProvider, $httpProvider, $provide) {
	
	$stateProvider
	    .state('layout', {
		     url: '/',
		     template: require('./layout.html'),
		     controller: 'LayoutController',
		     controllerAs: 'layout'
    	})
    	.state('layout.home', {
    		abstract: true,
	    	url: 'home',
	      	template: require('./modules/home/home.html'),
	      	controller: 'HomeController',
	      	controllerAs: 'home',
	      	params: {},
	      	resolve: {}
	    });

	$httpProvider.useApplyAsync(true);

	$provide.decorator('$exceptionHandler', function($delegate, $injector){
	        return function(exception, cause){
	            
	            let modalService = $injector.get("modalService");
	            modalService.openModal('EXCEPTION', 'successData', 'exceptions' , '', 'md', 'error', exception.message);
	            //console.log(exception);
	            let rootScope = $injector.get("$rootScope");
	            rootScope.ajaxOn = false;
	            $delegate(exception, cause);
	        };
	    });

}