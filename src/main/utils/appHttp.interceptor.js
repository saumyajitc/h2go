import angular from 'angular';
import angularui from 'angular-ui-bootstrap';
import uirouter from 'angular-ui-router';
import modalService from './modal.service';
import toastr from 'angular-toastr'

var AppHttpInterceptor = ($q, $injector, $log, $rootScope) => {
    'ngInject';

    var requestErrorCallback = request => {
        if (request.status === 500) {
          $log.debug('Something went wrong.');
        }
        $rootScope.ajaxOn = false;
        return $q.reject(request);
    };

    var requestCallback = config => {
      if(config !== null && config !== undefined && config.url !== null && config.url !== undefined && config.url.indexOf('.html') === -1  && config.url.indexOf('.png') === -1)
  		{
        if(_.has(config, "params") && !config.params.check){
          $rootScope.ajaxOn = false;
        }else{
          $rootScope.ajaxOn = true;
        }
  		}
        return config;
    };

    var responseErrorCallback = response => {
        if(response.status === -1){
          var msg = "Server not responding. Please contact support to resolve."
          $injector.get('modalService').openModal('EXCEPTION', 'successData', 'generic', '', 'sm', 'error', msg);
        }
        // handle the case where the user is not authenticated
        if (response.status === 401 || response.status === 403) {
            // $rootScope.$broadcast('unauthenticated', response);
            $injector.get('$state').go('home.base');
       }
       if (response.status === 404 || response.status === 500) {
         $injector.get('modalService').openModal('EXCEPTION', 'successData', 'exceptions', '', 'md', 'error', response.data);
        // $injector.get('toastr').error(response.data.exceptionStackTrace || response.data, response.data.exceptionMessage || response.data.statusText, {closeButton: true, timeOut: 0});
       }
       if(response.status === 501) {
			 	//console.log("Now here in the response of the server error");
  			var message = 'Your session has expired. You\'ll be redirected to your login page. Please re-login.';
  			$injector.get('modalService').openModal('Session Error', 'successData', 'exceptions', '', 'md', 'info', message);
   			$rootScope.sessionExpired = true;
   			$rootScope.ctr++;
        $rootScope.ajaxOn = false;
  		}
       return $q.reject(response);
    };

    var response = response => {
          // do something on success
          if(response.data.statusCode == -1){
          
          var message = response.data.message;
          
          if(message.indexOf("Exception") > 0){
            message = "Error in saving";
          }
          //$rootScope.open('Error', message, 'submitValidate');
        }
        $rootScope.ajaxOn = false;
        return response;
    };

  return {
    'request':       requestCallback,
    'response':      response,
    'requestError':  requestErrorCallback,
    'responseError': responseErrorCallback,
  };
};

/***/
var config = function($httpProvider) {
    $httpProvider.interceptors.push('appHttpInterceptor');
};

/***/    
export
default angular.module('services.interceptor', [uirouter, angularui, modalService])
    .service('appHttpInterceptor', AppHttpInterceptor)
    .config(config)
    .name;