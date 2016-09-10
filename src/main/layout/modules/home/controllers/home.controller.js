class HomeController {
  constructor($state, $q, $timeout, $rootScope, toastr, userSetup, layoutSetup, homeSetup, notify) {
    this.q = $q;
    this.timeout = $timeout;
    this.rootScope = $rootScope; //TODO - only needed to invalidate cache
    this.toastr = toastr;
    this.userService = userSetup;
    this.layoutService = layoutSetup;
    this.homeService = homeSetup;
    this.notifyService = notify;
  	
    this.userId = 1;
    //
    this.name = "HomeController";
    this.init();
  }

  init() {
    let lcl = this;
    lcl.layoutService.setDefaultStatus();
    let promises = {allIdeaList:this.getAllIdeaData()};
    this.q.all(promises)
      .then(
        (values) => {
            lcl.notifyService.sendMsg("AllIdeasFetched", values.allIdeaList);
        }
      );
    this.notifyService.getMsg("GetTabData", (_event, _data) => {
      if(_data === "Portfolios"){
        lcl.rootScope.portfolioModified = true; //TODO - only needed to invalidate cache
        lcl.getAllPortfolioData()
        .then(resp => {
          lcl.notifyService.sendMsg("AllPortfoliosFetched", resp);
        })
      } else if(_data === "Ideas"){
        lcl.rootScope.ideaModified = true; //TODO - only needed to invalidate cache
        lcl.getAllIdeaData()
        .then(resp => {
          lcl.notifyService.sendMsg("AllIdeasFetched", resp);
        });
      }
    });
   }

  getAllIdeaData() {
    return this.homeService.getAllIdeas();  
    //return this.homeService.getAllIdeas(this.userId);
  }
 
  getAllPortfolioData() {
    return this.homeService.getAllPortfolios();  
  }

}// end of section HomeController

export { HomeController }