import angular from 'angular';
import  ServiceConstants, { serviceConstants } from './service.constants';

class LayoutSetup {
  constructor($http, $rootScope, $timeout) {
    this.serviceConstants = serviceConstants;

    this.http = $http;
    this.rootScope = $rootScope;
    this.timeout = $timeout;

    this.mainMenu = [
                      {"label": "Home", "route":"home"}, 
                      {"label": "New Idea", "route": "idea"},
                      {"label": "New Portfolio", "route": "portfolio"},
                      {"label": "New User", "route": "user"}
                      // {"label": "Analytics", "route": "analytics"},
                      // {"label": "History", "route": "history"},
                      // {"label": "Settings", "route": "settings"}
                    ];


   this.mockReferenceData = {"currencyList":[{"currencyId":1,"currency":"USD","currencyDesc":"US Dollar"},{"currencyId":2,"currency":"AUD","currencyDesc":"Autralian Dollar"},{"currencyId":3,"currency":"CAD","currencyDesc":"Canadian Dollar"},{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},{"currencyId":5,"currency":"EUR","currencyDesc":"Eurozone"},{"currencyId":6,"currency":"CHF","currencyDesc":"Switzerland Franc"},{"currencyId":7,"currency":"JPY","currencyDesc":"Japan Yen"},{"currencyId":8,"currency":"NZD","currencyDesc":"New Zealand Dollar"},{"currencyId":9,"currency":"INR","currencyDesc":"Indian Rupee"}],"timeHorizonList":[{"timeHorizonId":1,"timeHorizonShortDescription":"2D","timeInDays":2,"timeHorizonLongDescription":"2 Days"},{"timeHorizonId":2,"timeHorizonShortDescription":"1W","timeInDays":7,"timeHorizonLongDescription":"5 Days / 1 Week"},{"timeHorizonId":3,"timeHorizonShortDescription":"1M","timeInDays":30,"timeHorizonLongDescription":"1 Month"},{"timeHorizonId":4,"timeHorizonShortDescription":"3M","timeInDays":90,"timeHorizonLongDescription":"3 Months"},{"timeHorizonId":5,"timeHorizonShortDescription":"6M","timeInDays":180,"timeHorizonLongDescription":"6 Months"},{"timeHorizonId":6,"timeHorizonShortDescription":"1YR","timeInDays":365,"timeHorizonLongDescription":"1 Year"}],"ideaStyleList":[{"ideaStyleId":1,"ideaStyleShortName":"ERNB","ideaStyleLongDescription":"Earnings Based Trade"},{"ideaStyleId":2,"ideaStyleShortName":"ECON","ideaStyleLongDescription":"Economic Trend Trade"},{"ideaStyleId":3,"ideaStyleShortName":"FUND","ideaStyleLongDescription":"Fundamental analysis"},{"ideaStyleId":4,"ideaStyleShortName":"GRWT","ideaStyleLongDescription":"Growth"},{"ideaStyleId":5,"ideaStyleShortName":"MOMT","ideaStyleLongDescription":"Momentum"},{"ideaStyleId":6,"ideaStyleShortName":"NWEV","ideaStyleLongDescription":"News/Event"},{"ideaStyleId":7,"ideaStyleShortName":"OPPR","ideaStyleLongDescription":"Opportunistic"},{"ideaStyleId":8,"ideaStyleShortName":"SECT","ideaStyleLongDescription":"Sector Specific Trade"},{"ideaStyleId":9,"ideaStyleShortName":"TECH","ideaStyleLongDescription":"Technical Analysis"},{"ideaStyleId":10,"ideaStyleShortName":"VALU","ideaStyleLongDescription":"Value"}],"convictionList":[{"convictionId":1,"convictionShortDescription":"Low","convictionLongDescription":"Low Conviction"},{"convictionId":2,"convictionShortDescription":"Medium","convictionLongDescription":"Medium Conviction"},{"convictionId":3,"convictionShortDescription":"High","convictionLongDescription":"High Conviction"}],"priceMethodList":[{"priceMethodId":1,"priceMethodShortDescription":"EOD","priceMethodLongDescription":"End of Day"},{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},{"priceMethodId":3,"priceMethodShortDescription":"VWAP","priceMethodLongDescription":"Volume Weighted Average Price"},{"priceMethodId":4,"priceMethodShortDescription":"SETL","priceMethodLongDescription":"Settlement Price"}],"probabilityList":[{"probabilityId":1,"bandName":"Low","percent":20,"bandDescription":"High risk - Most likely will not payoff"},{"probabilityId":2,"bandName":"Med","percent":40,"bandDescription":"Medium risk - likey will payoff"},{"probabilityId":3,"bandName":"High","percent":60,"bandDescription":"Mostly likely to payoff"},{"probabilityId":4,"bandName":"Very High","percent":80,"bandDescription":"Very High likely to payoff"}],"benchmarkTypeList":[{"benchmarkTypeId":1,"benchmarkShortDesc":"Product","benchmarkLongDesc":"Product Price Performance"},{"benchmarkTypeId":2,"benchmarkShortDesc":"Region","benchmarkLongDesc":"Regional Benchmark"},{"benchmarkTypeId":3,"benchmarkShortDesc":"Sector","benchmarkLongDesc":"Sector Benchmark"},{"benchmarkTypeId":4,"benchmarkShortDesc":"Country","benchmarkLongDesc":"Country Benchmark"}],"ideaRateList":[{"ideaRateId":1,"ideaRateCode":"Q","ideaRateShortDescription":"Quaterly"},{"ideaRateId":2,"ideaRateCode":"M","ideaRateShortDescription":"Monthly"}],"regionList":[{"regionId":1,"regionCode":"APAC","regionDescription":"Asia Pacific"},{"regionId":2,"regionCode":"EMEA","regionDescription":"EMEA"},{"regionId":3,"regionCode":"NAM","regionDescription":"North America"},{"regionId":4,"regionCode":"JP ","regionDescription":"Japan"},{"regionId":5,"regionCode":"Europe","regionDescription":"Europe"},{"regionId":6,"regionCode":"Aus","regionDescription":"Australia"},{"regionId":7,"regionCode":"Latam","regionDescription":"Latin America"}],"userRoleList":[{"userRoleId":1,"roleShortName":"AUTH","roleLongName":"Author"},{"userRoleId":2,"roleShortName":"MGR","roleLongName":"Manager"},{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},{"userRoleId":4,"roleShortName":"CMP","roleLongName":"Compliance"}],"userTypeList":[{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},{"userTypeId":2,"typeShortName":"SEC","typeLongName":"Sector Specialist"},{"userTypeId":3,"typeShortName":"COU","typeLongName":"Country Specialist"},{"userTypeId":4,"typeShortName":"COR","typeLongName":"Corporate Sales"},{"userTypeId":5,"typeShortName":"DER","typeLongName":"Derivative Sales"}],"ideaStateList":[{"ideaStateId":5,"ideaState":"Closed"},{"ideaStateId":1,"ideaState":"Open"},{"ideaStateId":4,"ideaState":"Pending Close"},{"ideaStateId":3,"ideaState":"Pending Edit"},{"ideaStateId":2,"ideaState":"Pending Open"},{"ideaStateId":6,"ideaState":"Rejected"}],"sectorsList":[{"itemLongName":"Energy","itemId":0,"included":false,"itemItems":[{"itemLongName":"Oil","itemId":1,"included":false,"itemItems":[]},{"itemLongName":"Gas","itemId":2,"included":false,"itemItems":[]},{"itemLongName":"Solar","itemId":3,"included":false,"itemItems":[]},{"itemLongName":"Wind","itemId":4,"included":false,"itemItems":[]}]},{"itemLongName":"Financial","itemId":"b","included":false,"itemItems":[{"itemLongName":"Banks","itemId":5,"included":false,"itemItems":[{"itemLongName":"Energy","included":false,"itemItems":[{"itemLongName":"Oil","itemId":1,"included":false,"itemItems":[]},{"itemLongName":"Gas","itemId":2,"included":false,"itemItems":[]},{"itemLongName":"Solar","itemId":3,"included":false,"itemItems":[]},{"itemLongName":"Wind","itemId":4,"included":false,"itemItems":[]}]}]},{"itemLongName":"Diversified Financials","itemId":6,"included":false,"itemItems":[]},{"itemLongName":"Insurance","itemId":7,"included":false,"itemItems":[]},{"itemLongName":"Real Estate","itemId":8,"included":false,"itemItems":[]}]},{"itemLongName":"Technology","itemId":"c","included":false,"itemItems":[{"itemLongName":"Internet","itemId":9,"included":false,"itemItems":[]},{"itemLongName":"Manufacturing","itemId":10,"included":false,"itemItems":[]},{"itemLongName":"Information Technology","itemId":11,"included":false,"itemItems":[]},{"itemLongName":"Bronze Age","itemId":12,"included":false,"itemItems":[]}]},{"itemLongName":"Consumer","itemId":"d","included":false,"itemItems":[{"itemLongName":"CPG","itemId":13,"included":false,"itemItems":[]},{"itemLongName":"Apps","itemId":14,"included":false,"itemItems":[]},{"itemLongName":"Things","itemId":15,"included":false,"itemItems":[]},{"itemLongName":"Stuff","itemId":16,"included":false,"itemItems":[]}]},],"listingRegionList":[{"itemLongName":"Europe","itemId":0,"included":false,"itemItems":[{"itemLongName":"UK","itemId":1,"included":false,"itemItems":[]},{"itemLongName":"France","itemId":2,"included":false,"itemItems":[]},{"itemLongName":"Germany","itemId":3,"included":false,"itemItems":[]},{"itemLongName":"Spain","itemId":4,"included":false,"itemItems":[]}]},{"itemLongName":"Asia","itemId":"b","included":false,"itemItems":[{"itemLongName":"South Asia","itemId":5,"included":false,"itemItems":[{"itemLongName":"India","included":false,"itemItems":[{"itemLongName":"North India","itemId":1,"included":false,"itemItems":[]},{"itemLongName":"South India","itemId":2,"included":false,"itemItems":[]},{"itemLongName":"Assam","itemId":3,"included":false,"itemItems":[]},{"itemLongName":"Deccan Region","itemId":4,"included":false,"itemItems":[]}]}]},{"itemLongName":"China","itemId":6,"included":false,"itemItems":[]},{"itemLongName":"Japan","itemId":7,"included":false,"itemItems":[]},{"itemLongName":"Taiwan","itemId":8,"included":false,"itemItems":[]}]},{"itemLongName":"South America","itemId":"c","included":false,"itemItems":[{"itemLongName":"Brazil","itemId":9,"included":false,"itemItems":[]},{"itemLongName":"Argentina","itemId":10,"included":false,"itemItems":[]},{"itemLongName":"Chile","itemId":11,"included":false,"itemItems":[]},{"itemLongName":"Panama","itemId":12,"included":false,"itemItems":[]}]},{"itemLongName":"North America","itemId":"d","included":false,"itemItems":[{"itemLongName":"USA","itemId":13,"included":false,"itemItems":[]},{"itemLongName":"Canada","itemId":14,"included":false,"itemItems":[]},{"itemLongName":"Mexico","itemId":15,"included":false,"itemItems":[]},]},]};

   this.sharableRefData = [];

  //  //flags for app
  //  this._ideaStatus = "new"; //defaulted to 'new' on load; possible values 'new', 'edit', 'del';
  //  this._ideaIdToEdit = null; //defaulted to null, but would ideally accept id of idea to be edited;

   this._status = {"idea": "new", "portfolio": "new"}; //defaulted to 'new' on load; possible values 'new', 'edit', 'closed';
   this._idToEdit = {"idea": null, "portfolio": null}; //defaulted to null, but would ideally accept id of idea to be edited;
  }
  
// //getter method to set the  value of the idea status
//   get ideaStatus() {
//     return this._ideaStatus;
//   }

// //setter method to set the  value of the idea status
//   set ideaStatus(_val) {
//     this._ideaStatus = _val;
//   }

// //getter method to set the  value of the idea to edit
//   get ideaIdToEdit() {
//     return this._ideaToEdit;
//   } 
// //setter method to set the  value of the idea to edit
//   set ideaIdToEdit(_val) {
//     this._ideaToEdit = _val;
//   } 

  get status(){
    return this._status;
  }

  set status(_val){
    this._status = _val;
  }

  get idToEdit(){
    return this._idToEdit;
  }

  set idToEdit(_val){
    this._idToEdit = _val;
  }

  getMenus() {
    return this.mainMenu
  }

  getMockRefData() {
    return this.mockReferenceData
  }

  getAppReferenceData() {
    var lcl = this;
    if(this.sharableRefData.length < 1){
      var url = this.serviceConstants.SERVICE_API + 'referenceData'; 
        return this.http.get(url)
        .then(resp => {
                lcl.sharableRefData = this.doDefaultInjections(resp.data);
                this.rootScope.ajaxOn = false;
                return lcl.sharableRefData;
              },
              (err) => {
                lcl.sharableRefData = lcl.getMockRefData();
                this.rootScope.ajaxOn = false;
                return lcl.sharableRefData;
              }
        )
      } else {
        this.rootScope.ajaxOn = false;
        return this.sharableRefData;
      } 
  }

  setDefaultStatus() {
    this.status = {"idea": "new", "portfolio": "new"};
  }

  doDefaultInjections(_collections) {
    var defStyleObj = _collections.ideaStyleList[0]; //{"ideaStyleId": -1, "ideaStyleLongDescription": '-- Select a style --', "ideaStyleShortName": 'none'};
    // _collections.ideaStyleList.unshift(defStyleObj);
    _.set(defStyleObj, 'ideaStyleLongDescription', '-- Select a style --');

    return _collections;
  }

}

export default angular.module('services.layout-setup', [ServiceConstants])
  .service('layoutSetup', LayoutSetup)
  .name;