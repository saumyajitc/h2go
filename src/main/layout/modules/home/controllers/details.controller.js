class DetailsController {
  constructor($state, layoutSetup, notify) {
	this.name = "DetailsController";
	this.state = $state;
	this.layoutService = layoutSetup;
	this.notifyService = notify;
	this.selectedItem = {};
	this.init();
  }

  init() {
  	let lcl = this;
  	this.notifyService.getMsg("ItemSelectedFromList", (_event, _data) => {
			console.log(_data);
  		lcl.selectedItem = _data.item;
			lcl.selectedPage = _data.page;
  	})
  }

  sendForEdit(_page, _id) {
		console.log("sending for edit", _page, _id)
  	this.layoutService.idToEdit[_page] = _id;
  	this.notifyService.sendMsg("SendingForEdit", {"page": _page, "id":_id});
  }
  
}

export { DetailsController }