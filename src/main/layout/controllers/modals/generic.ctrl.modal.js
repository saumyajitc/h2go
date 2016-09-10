class GenericModalController {
  constructor($rootScope, $uibModalInstance, $timeout, $filter, modalWin, notify) {
    
    const self = this;

    self.rootScope = $rootScope;
    self.uibModalInstance = $uibModalInstance;
    self.timeout = $timeout;
    self.filter = $filter;
    self.objToBePassedToModalInstance = modalWin.obj;
    self.modalWin = modalWin;
    self.notifyService = notify;

    self.title = modalWin.title ? modalWin.title : this.filter('uppercase')(modalWin.status);
  	self.message = modalWin.message;
    self.obj = modalWin.obj;
  	self.yesLabel = "Ok";
  	self.noLabel = "Cancel";
  	self.status = modalWin.status ? modalWin.status : "";

    if(modalWin.message instanceof Object){
      self.url = modalWin.message.url; //modalWin.message.split(',')[0].split('"url":')[1];
      self.messageResp = modalWin.message.exceptionMessage; //modalWin.message.split(',')[1].split('"exceptionMessage":')[1];
      self.stackTrace = modalWin.message.exceptionStackTrace; //modalWin.message.split(',')[2].split('"exceptionStackTrace":')[1];
    }else{
      self.url = "-- not available --";
      self.messageResp = self.message;
      self.stackTrace = "-- not available --";
    }
  }

  ok() {
	 //self.notifyService.sendMsg("OkConfirmed"+ self.modalWin.content, objToBePassedToModalInstance);
	 this.close();
  };
		  
  close() {
  	console.log("Generic Modal CLOSE button clicked");
  	//self.notifyService.sendMsg("CancelConfirmed"+ self.modalWin.content, objToBePassedToModalInstance);
  	this.uibModalInstance.close();
  };

}

export { GenericModalController }