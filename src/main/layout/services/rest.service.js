import angular from 'angular';
import ServiceConstants, { serviceConstants } from './service.constants';

class RestService {
    constructor($http, $rootScope, $timeout, $q) {
        this.rootScope = $rootScope;
        this.http = $http;
        this.q = $q;
    }

    //check QPS to see if a ticker is valid. Returns the ticker if it is, returns "" if it isn't.
    checkTicker(str){
        if(!str){
            return this.q.when(false);
        } else {
            return this.http({url: serviceConstants.SERVICE_EQUITY + 'getByTicker', method:"POST", params:{'check': false}, data: str.toUpperCase()})
            .then(res => {
                console.log(1, res);
                this.rootScope.ajaxOn = false;
                return res.data;
            })
            .catch(err => {
                this.rootScope.ajaxOn = false;
                console.log(err);
                return false;
            });
        }
    }
}

export default angular.module('services.rest-service', [ServiceConstants])
    .service('restService', RestService)
    .name;