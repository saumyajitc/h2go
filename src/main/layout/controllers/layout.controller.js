class LayoutController {
  constructor($rootScope, $state, layoutSetup, notify) {
    //variable and injection mapping
    let lcl = this;
    this.state = $state;
    this.rootScope = $rootScope;
    this.rootScope.ajaxOn = false;
    this.layoutService = layoutSetup;
    this.notifyService = notify;
    this.mainMenus = layoutSetup.getMenus();
    this.selectedMenu = this.mainMenus[0].route;
    this.refData = [];
    
    //method mapping
    this.setAppReferenceData();

    this.init();

    this.rootScope.$watch("ajaxOn", function(newvalue, oldvalue){
      lcl.rootScope.ajaxOn = newvalue;
    });

    //route changes
    this.state.go('layout.home.base');
  }

  init() {
    let lcl = this;
    this.notifyService.getMsg("SendingForEdit", (_event, _data) => {
      let _page = _data.page;
      //set the status in the LayoutService to edit;
      lcl.layoutService.status[_page] = "edit";
      lcl.setSelectedMenu(_page);
    })
  }

  setAppReferenceData() {
    //debugger
    this.layoutService.getAppReferenceData().then(
      (refData) => {
        this.refData = refData;
      },
      (err) => {
        console.log(err.data.errors);
      }
    )
  }

  setSelectedMenu(_route){
    this.selectedMenu = _route;
    var route = 'layout.' + _route + '.base';
    this.state.go(route);
  }

}

export { LayoutController }