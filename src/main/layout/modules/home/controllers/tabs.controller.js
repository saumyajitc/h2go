class TabsController {
  constructor(notify, $scope, layoutSetup) {
		this.scope = $scope;
		this.notifyService = notify;
		this.layoutService = layoutSetup;
		this.name = "TabsController";
		this.allIdeaList = [];
		this.allPortfolioList = [];
  		this.tabLinks = [{ "label": "Ideas", "value": 1 }, { "label": "Portfolios", "value": 2 }, { "label": "Contributors", "value": 3 }]
  		this.selectedLink = this.tabLinks[0].label;

    	this.selectedIdea = this.selectedPortfolio = this.selectedContributor = {};

		this.init();
		//This method is targeted to make all scope watches for garbage collection
		// this.scope.$on('$destroy', function() {
		// 	//stop watching when scope is destroyed
		// 	unwatch();
		// });
  }

  init() {
		console.log("Inside Tabs Controller");
		let lcl = this;
		this.notifyService.getMsg("AllIdeasFetched", (_event, _data) => {
			lcl.allIdeaList = _data;
			lcl.selectItem('idea', lcl.allIdeaList[0]);
			lcl.showDetails('idea', lcl.allIdeaList[0]);
		});
		this.notifyService.getMsg("AllPortfoliosFetched", (_event, _data) => {
			console.log("returned portofolio data", _data)
			lcl.allPortfolioList = _data;
		});

  }

  selectItem(_page, _item) {
    if(_page === 'idea') this.selectedIdea = _item;
    else if (_page === 'portfolio') this.selectedPortfolio = _item;
    else if (_page === 'contributor') this.selectedContributor = _item;
  }

  getTabData(tab){
	 this.notifyService.sendMsg("GetTabData", tab);
  }
  
  showDetails(_page, _item) {
		this.notifyService.sendMsg("ItemSelectedFromList", {"page": _page, "item": _item});
  }
}//end of TabsControlller section

export { TabsController }