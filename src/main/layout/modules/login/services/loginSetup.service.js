import angular from 'angular';
import ServiceConstants, { serviceConstants } from '../../../services/service.constants';

class LoginSetup {
  constructor($http, $rootScope, $q, serviceConstants) {
    this.serviceConstants = serviceConstants;
    this.http = $http;
    this.rootScope = $rootScope;
    this.q = $q;
  }


  getAllIdeas(_id) {
    // var lcl = this;
    // if(lcl.getIdeaCache().length < 1 || lcl.rootScope.ideaModified){
    //   this.rootScope.ideaModified = false;
    //   if(_id){
    //     return lcl.fetchAllIdeas(_id).then(resp => { return lcl.getIdeaCache() });
    //   }else{
    //     return lcl.fetchAllIdeas().then(resp => { return lcl.getIdeaCache() });
    //   }
    // } else {
    //   return lcl.q.when(lcl.getIdeaCache())
    // }
  }


}// end of LoginSetup declartion

export default angular.module('services.login', [])
  .service('loginSetup', LoginSetup)
  .name;