import angular from 'angular';
import * as d3 from 'd3';

function detailsComp($filter) {
  require('./details-comp.scss');

  	function days_between(date1, date2) {
	    // The number of milliseconds in one day
	    var ONE_DAY = 1000 * 60 * 60 * 24

	    // Convert both dates to milliseconds
	    var date1_ms = date1.getTime()
	    var date2_ms = date2.getTime()

	    // Calculate the difference in milliseconds
	    var difference_ms = Math.abs(date1_ms - date2_ms)

	    // Convert back to days and return
	    return Math.round(difference_ms/ONE_DAY)

	}

	return {
		restrict: 'E',
		scope:{
			detaildata: "=",
			id: "@"
		},
		template: require('./details-comp.html'),
		controllerAs: 'details',
		controller: function($scope, notify, layoutSetup){
			// parse the date / time
			var parseTime = d3.timeParse("%m/%d/%Y");
			const details = this;

			details.portfolio = $scope.detaildata;

			details.direction = "";
			details.label = "";
			details.dateCreated = "";
			details.timeSinceCreation = "";

			details.id = "position" + $scope.id;
			details.chartData = [			
									{"date": "02/21/2014", "abs": 10, "rel": 10},
									{"date": "04/20/2014", "abs": 9.8, "rel": 10.3},
									{"date": "08/15/2014", "abs": 9.6, "rel": 10},
									{"date": "12/26/2014", "abs": 9.9, "rel": 9.8},
									{"date": "03/12/2015", "abs": 10, "rel": 10.1},
									{"date": "05/20/2015", "abs": 10.1, "rel": 9.2},
									{"date": "07/07/2015", "abs": 10, "rel": 10.5},
									{"date": "10/28/2015", "abs": 10.2, "rel": 10},
									{"date": "02/25/2016", "abs": 9.7, "rel": 8.7},
									{"date": "03/06/2016", "abs": 9.6, "rel": 10},
									{"date": "04/01/2016", "abs": 10, "rel": 9},
									{"date": "05/25/2016", "abs": 10.05, "rel": 9.8},
									{"date": "06/20/2016", "abs": 10.33, "rel": 10},
									{"date": "08/11/2016", "abs": 9.5, "rel": 9.8}
								]



			_(details.chartData).forEach(function(d) {
				//debugger;
				d.date = parseTime(d.date);
				d.abs = d.abs;
				d.rel = d.rel;
			})
			//tc.model = ngModel;
			details.sendForEdit = function(_page, _id) {
				console.log("sending for edit", _page, _id)
				layoutSetup.idToEdit[_page] = _id;
				notify.sendMsg("SendingForEdit", {"page": _page, "id":_id});
			};
			//console.log("inside directive ideaComp");
			details.init = function(){
				if(details.portfolio !== undefined){
					let diffDays = null;
					let datenow = new Date();

					
					details.dateCreated = $filter('date')(details.portfolio.lastUpdateDate, "MMM dd ''yy");
					diffDays = days_between(new Date(details.portfolio.lastUpdateDate), datenow);
					details.timeSinceCreation = diffDays < 2 ?  diffDays + " Day" : diffDays + " Days";
				}
			}


			details.init();
		},
		link: function(scope, elem, attrs){
			elem.bind('click', function(){
				console.log(scope.detaildata);
				//scope.$apply(scope.sendidea({idea:scope.detaildata}))
			});

			
		}
	}
}

export default angular.module('directives.detailsComp', [])
  .directive('detailsComp', detailsComp)
  .name;
  