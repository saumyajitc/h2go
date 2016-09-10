import angular from 'angular';

function portfolioComp() {
  require('./portfolio-comp.scss');
	return {
		restrict: 'E',
		scope:{
			portfoliodata: "=",
			id: "@",
			sendportfolio: "&"
		},
		//require: "ngModel",
		template: require('./portfolio-comp.html'),
		controllerAs: 'pc',
		controller: function($scope, notify, layoutSetup){
			const pc = this;
			pc.portfolio = $scope.portfoliodata;
			pc.id = "position" + $scope.id;
			//tc.model = ngModel;
			pc.sendForEdit = function(_page, _id) {
				console.log("sending for edit", _page, _id)
				layoutSetup.idToEdit[_page] = _id;
				notify.sendMsg("SendingForEdit", {"page": _page, "id":_id});
			};
			console.log("inside directive portfolioComp");
		},
		link: function(scope, elem, attrs){
			elem.bind('click', function(){
				console.log(scope.portfoliodata);
				scope.$apply(scope.sendportfolio({portfolio:scope.portfoliodata}))
			})
		}
	}
}

export default angular.module('directives.portfolioComp', [])
  .directive('portfolioComp', portfolioComp)
  .name;
  