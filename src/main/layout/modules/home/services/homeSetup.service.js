import angular from 'angular';
import ServiceConstants, { serviceConstants } from '../../../services/service.constants';

class HomeSetup {
  constructor($http, $rootScope, $q, serviceConstants) {
    this.serviceConstants = serviceConstants;
    this.http = $http;
    this.rootScope = $rootScope;
    this.q = $q;
    this.ideaCache = [];
    this.portfolioCache = [];
    this.mockIdeaList = [{"baseIdeaId":1,"ideaTitle":"This is a IBM idea","ideaCommentary":"This is a IBM idea","targetPrice":100,"createDate":"2016-08-10","lastUpdateDate":"2016-08-10","author":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"probability":{"probabilityId":2,"bandName":"Med","percent":40,"bandDescription":"Medium risk - likey will payoff"},"ideaStyle":{"ideaStyleId":1,"ideaStyleShortName":"ERNB","ideaStyleLongDescription":"Earnings Based Trade"},"timeHorizon":{"timeHorizonId":2,"timeHorizonShortDescription":"1W","timeInDays":7,"timeHorizonLongDescription":"5 Days / 1 Week"},"conviction":{"convictionId":1,"convictionShortDescription":"Low","convictionLongDescription":"Low Conviction"},"priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaState":{"ideaStateId":1,"ideaState":"Open"},"ideaStateReason":{"ideaStateReasonId":1,"ideaStateReason":"Opened By User"},"closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":12,"takeProfitAlertAmount":15,"takeProfitTriggerAmount":20,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"equityIdeaLegs":[{"equityLegIdeaId":1,"ideaTicker":"IBM.N","ideaDirection":"BUY","ideaInvestmentAmount":2000}],"portfolioIdeas":[{"portfolioIdeaId":2,"portfolio":{"portfolioId":1,"portfolioShortName":"BlackRock","portfolioLongDescription":"This is a US government portfolio","portfolioComment":"This is a US government portfolio","portfolioRegion":{"regionId":2,"regionCode":"EMEA","regionDescription":"EMEA"},"portfolioOwner":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"accountCaptain":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"tilUniqueId":"BlackRock_TIM","portfolioTilRdc2Name":"","internalFlag":"N","styleFilterFlag":"Y","portfolioClient":"US Government","ideaRateAccepted":15,"availableCapital":2000,"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10","benchmarkType":{"benchmarkTypeId":4,"benchmarkShortDesc":"Country","benchmarkLongDesc":"Country Benchmark"},"benchmarkRic":"^FTSE","priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaRate":{"ideaRateId":2,"ideaRateCode":"M","ideaRateShortDescription":"Monthly"},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"closeOutStrategy":{"stopLossAlertAmount":0,"stopLossTriggerAmount":0,"takeProfitAlertAmount":0,"takeProfitTriggerAmount":0,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"portfolioContributors":[{"portfolioContributorId":1,"user":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}},{"portfolioContributorId":2,"user":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}}]},"ideaState":{"ideaStateId":1,"ideaState":"Open"},"ideaStateReason":{"ideaStateReasonId":1,"ideaStateReason":"Opened By User"},"ideaInvestmentAmount":2000,"rdc2IdeaId":"","lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10"},{"portfolioIdeaId":1,"portfolio":{"portfolioId":2,"portfolioShortName":"Steven Douglas","portfolioLongDescription":"This is a China Governement portfolio","portfolioComment":"This is a China Governement portfolio","portfolioRegion":{"regionId":2,"regionCode":"EMEA","regionDescription":"EMEA"},"portfolioOwner":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"accountCaptain":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"tilUniqueId":"Steven_TIM","portfolioTilRdc2Name":"","internalFlag":"N","styleFilterFlag":"Y","portfolioClient":"China Governement","ideaRateAccepted":35,"availableCapital":3000,"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10","benchmarkType":{"benchmarkTypeId":4,"benchmarkShortDesc":"Country","benchmarkLongDesc":"Country Benchmark"},"benchmarkRic":"QQQ","priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaRate":{"ideaRateId":2,"ideaRateCode":"M","ideaRateShortDescription":"Monthly"},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"closeOutStrategy":{"stopLossAlertAmount":0,"stopLossTriggerAmount":0,"takeProfitAlertAmount":0,"takeProfitTriggerAmount":0,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"portfolioContributors":[{"portfolioContributorId":3,"user":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}},{"portfolioContributorId":4,"user":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}}]},"ideaState":{"ideaStateId":1,"ideaState":"Open"},"ideaStateReason":{"ideaStateReasonId":1,"ideaStateReason":"Opened By User"},"ideaInvestmentAmount":2000,"rdc2IdeaId":"","lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10"}]},{"baseIdeaId":2,"ideaTitle":"This is a IBM Stocks Idea","ideaCommentary":"This is a IBM Stocks Idea","targetPrice":99,"createDate":"2016-08-10","lastUpdateDate":"2016-08-10","author":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"probability":{"probabilityId":2,"bandName":"Med","percent":40,"bandDescription":"Medium risk - likey will payoff"},"ideaStyle":{"ideaStyleId":1,"ideaStyleShortName":"ERNB","ideaStyleLongDescription":"Earnings Based Trade"},"timeHorizon":{"timeHorizonId":2,"timeHorizonShortDescription":"1W","timeInDays":7,"timeHorizonLongDescription":"5 Days / 1 Week"},"conviction":{"convictionId":1,"convictionShortDescription":"Low","convictionLongDescription":"Low Conviction"},"priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaState":{"ideaStateId":1,"ideaState":"Open"},"ideaStateReason":{"ideaStateReasonId":1,"ideaStateReason":"Opened By User"},"closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":20,"takeProfitAlertAmount":4000,"takeProfitTriggerAmount":50000,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"equityIdeaLegs":[{"equityLegIdeaId":2,"ideaTicker":"IBM.N","ideaDirection":"SELL","ideaInvestmentAmount":4000}],"portfolioIdeas":[{"portfolioIdeaId":4,"portfolio":{"portfolioId":2,"portfolioShortName":"Steven Douglas","portfolioLongDescription":"This is a China Governement portfolio","portfolioComment":"This is a China Governement portfolio","portfolioRegion":{"regionId":2,"regionCode":"EMEA","regionDescription":"EMEA"},"portfolioOwner":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"accountCaptain":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"tilUniqueId":"Steven_TIM","portfolioTilRdc2Name":"","internalFlag":"N","styleFilterFlag":"Y","portfolioClient":"China Governement","ideaRateAccepted":35,"availableCapital":3000,"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10","benchmarkType":{"benchmarkTypeId":4,"benchmarkShortDesc":"Country","benchmarkLongDesc":"Country Benchmark"},"benchmarkRic":"QQQ","priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaRate":{"ideaRateId":2,"ideaRateCode":"M","ideaRateShortDescription":"Monthly"},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"closeOutStrategy":{"stopLossAlertAmount":0,"stopLossTriggerAmount":0,"takeProfitAlertAmount":0,"takeProfitTriggerAmount":0,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"portfolioContributors":[{"portfolioContributorId":3,"user":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}},{"portfolioContributorId":4,"user":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}}]},"ideaState":{"ideaStateId":1,"ideaState":"Open"},"ideaStateReason":{"ideaStateReasonId":1,"ideaStateReason":"Opened By User"},"ideaInvestmentAmount":4000,"rdc2IdeaId":"","lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10"},{"portfolioIdeaId":3,"portfolio":{"portfolioId":1,"portfolioShortName":"BlackRock","portfolioLongDescription":"This is a US government portfolio","portfolioComment":"This is a US government portfolio","portfolioRegion":{"regionId":2,"regionCode":"EMEA","regionDescription":"EMEA"},"portfolioOwner":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"accountCaptain":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"tilUniqueId":"BlackRock_TIM","portfolioTilRdc2Name":"","internalFlag":"N","styleFilterFlag":"Y","portfolioClient":"US Government","ideaRateAccepted":15,"availableCapital":2000,"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10","benchmarkType":{"benchmarkTypeId":4,"benchmarkShortDesc":"Country","benchmarkLongDesc":"Country Benchmark"},"benchmarkRic":"^FTSE","priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaRate":{"ideaRateId":2,"ideaRateCode":"M","ideaRateShortDescription":"Monthly"},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"closeOutStrategy":{"stopLossAlertAmount":0,"stopLossTriggerAmount":0,"takeProfitAlertAmount":0,"takeProfitTriggerAmount":0,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"portfolioContributors":[{"portfolioContributorId":1,"user":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghworkCity":"NY","cghworkCountry":"USA","cghcountryDescription":"USA","cghsoeid":"JW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}},{"portfolioContributorId":2,"user":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}}]},"ideaState":{"ideaStateId":1,"ideaState":"Open"},"ideaStateReason":{"ideaStateReasonId":1,"ideaStateReason":"Opened By User"},"ideaInvestmentAmount":4000,"rdc2IdeaId":"","lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghworkCity":"LDN","cghworkCountry":"USA","cghcountryDescription":"England","cghsoeid":"VW12345"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-10"}]}];
    this.mockPortfolioList = [{"portfolioId":1,"portfolioShortName":"asdfasfasf","portfolioLongDescription":"dsfaf","portfolioComment":"sdfasff","portfolioRegion":{"regionId":2,"regionCode":"EMEA","regionDescription":"EMEA"},"portfolioOwner":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghcountryDescription":"England","cghsoeid":"VW12345","cghworkCity":"LDN","cghworkCountry":"USA"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"accountCaptain":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghcountryDescription":"USA","cghsoeid":"JW12345","cghworkCity":"NY","cghworkCountry":"USA"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"tilUniqueId":"sdfasd","portfolioTilRdc2Name":"","internalFlag":"N","styleFilterFlag":"Y","portfolioClient":"safasd","ideaRateAccepted":2,"availableCapital":0,"lastUpdatedBy":{"userId":2,"userDimension":{"firstName":"Victor","lastName":"Wright","employeeName":"Victor Wright","emailAddress":"victor@abc.com","officeLocation":"LDN","workPhone":"6546464565","employeeStatus":"A","cghcountryDescription":"England","cghsoeid":"VW12345","cghworkCity":"LDN","cghworkCountry":"USA"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"Y","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"VICTOR_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}},"lastUpdateDate":"2016-08-12","benchmarkType":{"benchmarkTypeId":4,"benchmarkShortDesc":"Country","benchmarkLongDesc":"Country Benchmark"},"benchmarkRic":null,"priceMethod":{"priceMethodId":2,"priceMethodShortDescription":"MKT","priceMethodLongDescription":"Market Close"},"ideaRate":{"ideaRateId":2,"ideaRateCode":"M","ideaRateShortDescription":"Monthly"},"currency":{"currencyId":4,"currency":"GBP","currencyDesc":"Great Britain Pound"},"closeOutStrategy":{"stopLossAlertAmount":0,"stopLossTriggerAmount":0,"takeProfitAlertAmount":0,"takeProfitTriggerAmount":0,"stopLossMetricsType":"P","takeProfitMetricsType":"P"},"portfolioContributors":[{"portfolioContributorId":1,"user":{"userId":1,"userDimension":{"firstName":"John","lastName":"Wayne","employeeName":"John Wayne","emailAddress":"john@abc.com","officeLocation":"NY","workPhone":"438754365","employeeStatus":"A","cghcountryDescription":"USA","cghsoeid":"JW12345","cghworkCity":"NY","cghworkCountry":"USA"},"userRole":{"userRoleId":3,"roleShortName":"RDH","roleLongName":"Regional Desk Head"},"adminPrivileges":"N","userType":{"userTypeId":1,"typeShortName":"GEN","typeLongName":"Generalist"},"authorTILRDC2Name":"JOHN_TIL","closeOutStrategy":{"stopLossAlertAmount":10,"stopLossTriggerAmount":15,"takeProfitAlertAmount":50.34,"takeProfitTriggerAmount":60.45,"stopLossMetricsType":"P","takeProfitMetricsType":"P"}}}]}];

  }

  getMockIdeaList() {
    return this.mockIdeaList;
  }

  getMockPortfolioList() {
    return this.mockPortfolioList;
  }

  getPortfolioCache(){
    return this.portfolioCache;
  }

  getIdeaCache(){
    return this.ideaCache;
  }

  getAllIdeas(_id) {
    var lcl = this;
    if(lcl.getIdeaCache().length < 1 || lcl.rootScope.ideaModified){
      this.rootScope.ideaModified = false;
      if(_id){
        return lcl.fetchAllIdeas(_id).then(resp => { return lcl.getIdeaCache() });
      }else{
        return lcl.fetchAllIdeas().then(resp => { return lcl.getIdeaCache() });
      }
    } else {
      return lcl.q.when(lcl.getIdeaCache())
    }
  }


  fetchAllIdeas(_id){
    let lcl = this;
    let url = this.serviceConstants.SERVICE_BASE_IDEA; 
    if(_id){url += 'byAuthor/' + _id};
      return lcl.http.get(url)
      .then(resp => {
              lcl.rootScope.ajaxOn = false;
              lcl.ideaCache = resp.data;
              return lcl.getIdeaCache();
            },
            (err) => {
              lcl.rootScope.ajaxOn = false;
              lcl.ideaCache = lcl.getMockIdeaList()
              return lcl.getIdeaCache();
            }
      );
  }

  getAllPortfolios() {
    let lcl = this;
    if(lcl.getPortfolioCache().length < 1 || this.rootScope.portfolioModified){
      this.rootScope.portfolioModified = false;
      return lcl.fetchAllPortfolios()
      .then(resp =>{
        return lcl.getPortfolioCache();
      });
    } else {
      return lcl.q.when(lcl.getPortfolioCache());
    }
  }

  fetchAllPortfolios() {
    let lcl = this;
    let url = this.serviceConstants.SERVICE_PORTFOLIO; 
      return lcl.http.get(url)
      .then(resp => {
              lcl.rootScope.ajaxOn = false;
              lcl.portfolioCache = resp.data;
              return lcl.getPortfolioCache();
            },
            (err) => {
              lcl.rootScope.ajaxOn = false;
              lcl.portfolioCache = lcl.getMockPortfolioList()
              return lcl.getPortfolioCache();
            }
      );
  }


}// end of HomeSetup declartion

export default angular.module('services.random-names', [])
  .service('homeSetup', HomeSetup)
  .name;