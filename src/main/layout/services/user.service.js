import angular from 'angular';
import  ServiceConstants, { serviceConstants } from './service.constants';
//import _ from 'lodash';

class UserSetup {
  constructor($http, $rootScope, $q) {
    this.rootScope = $rootScope;
    this.serviceConstants = serviceConstants;
    this.q = $q;
    this.http = $http;
    //this._ = _;
   	this.mockUserData = {"userId":2,"userName":"John Wright","userCitiSOEId":"JOHN_CITI","userRole":{"userRoleId":1,"roleShortName":"AUTH","roleLongName":"Author"},"userType":{"userTypeId":3,"typeShortName":"REG","typeLongName":"Regional Specialist"},"stopLossAbsoulteAmount":500000.45,"stopLossPercentageAmount":7,"takeProfitAbsoulteAmount":150000000.45,"takeProfitPercentageAmount":70,"authorTILRDC2Name":"JOHN_TIL"};
    this.mockUserDraft = {"userId":0,"userDimension":{"userCitiSOEId":"","userFirstName":"","userLastName":"","officeLocation":""},"userRole":{"userRoleId":1,"roleShortName":"AUTH","roleLongName":"Author"},"userType":{"userTypeId":3,"typeShortName":"REG","typeLongName":"Regional Specialist"},"authorTILRDC2Name":"","closeOutStrategy":{"stopLossAlertAbsoluteAmount":0,"stopLossAlertPercentageAmount":0,"stopLossTriggerAbsoluteAmount":0,"stopLossTriggerPercentageAmount":0,"takeProfitAlertAbsoluteAmount":0,"takeProfitAlertPercentageAmount":0,"takeProfitTriggerAbsoluteAmount":0,"takeProfitTriggerPercentageAmount":0}};
   	this.sharableUserData = {};
    this.fakeUser = {"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},
   	this.userId = "1"; //Need to set it with the session id when available
  }
  

  getMockUserData() {
    return this.mockUserData;
  }

  getUserDraft(){
    return this.http.get(this.serviceConstants.SERVICE_USER + 'draft')
    .then(resp =>{
      this.rootScope.ajaxOn = false;
      return resp.data;
    })
    .catch(err =>{
      this.rootScope.ajaxOn = false;
      if (err) {console.log(err);}
      return this.mockUserDraft;
    });
  }

  createUser(user){
    return this.http.post(this.serviceConstants.SERVICE_USER, user)
    .then(resp =>{
      this.rootScope.ajaxOn = false;
      return resp;
    })
    .catch(err => {
      this.rootScope.ajaxOn = false;
      if(err) {console.log(err);}
      return err;
    });
  }

  checkUserFeed(user){
    return this.http.get(this.serviceConstants.SERVICE_USERFEED + user)
    .then(resp => {
      this.rootScope.ajaxOn = false;
       return resp.data
    })
    .catch(err => {
      this.rootScope.ajaxOn = false;
      if(err){console.log(err);}
      return this.fakeUser;
    })
  }

  getLoggedUserData() {
    var lcl = this;
   if(_.isEmpty(this.sharableUserData)){
      var url = this.serviceConstants.SERVICE_USER + this.userId; 
        return this.http.get(url)
        .then(resp => {
                this.rootScope.ajaxOn = false;
                lcl.sharableUserData = resp.data;
                return lcl.sharableUserData;
              },
              (err) => {
                this.rootScope.ajaxOn = false;
                lcl.sharableUserData = lcl.getMockUserData();
                return lcl.sharableUserData;
              }
        )
      } else {
        return this.q.when(this.sharableUserData);
      }
    
  }
}

export default angular.module('services.user-setup', [ServiceConstants])
  .service('userSetup', UserSetup)
  .name;