import angular from 'angular';
import * as d3 from 'd3';

function ideaComp($filter) {
  require('./idea-comp.scss');

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
			ideadata: "=",
			id: "@",
			sendidea: "&"
		},
		template: require('./idea-comp.html'),
		controllerAs: 'ic',
		controller: function($scope, notify, layoutSetup){
			// parse the date / time
			var parseTime = d3.timeParse("%m/%d/%Y");
			const ic = this;
			ic.idea = $scope.ideadata;

			ic.tickerBucket = ""; //possible values 'single', 'pair'
			ic.direction = "";
			ic.label = "";
			ic.dateCreated = "";
			ic.timeSinceCreation = "";
			ic.openIdeas = "";
			ic.closedIdeas = "";

			ic.id = "position" + $scope.id;
			ic.chartData = [
								{"date": "02/21/2014", "abs": 10, "rel": 20},
								{"date": "04/20/2014", "abs": 15, "rel": 10},
								{"date": "08/15/2014", "abs": 20, "rel": 13},
								{"date": "12/26/2014", "abs": 25, "rel": 26},
								{"date": "03/12/2015", "abs": 11, "rel": 20},
								{"date": "05/20/2015", "abs": 16, "rel": 17},
								{"date": "07/07/2015", "abs": 21, "rel": 25},
								{"date": "10/28/2015", "abs": 26, "rel": 20},
								{"date": "02/25/2016", "abs": 22, "rel": 16},
								{"date": "03/06/2016", "abs": 27, "rel": 21},
								{"date": "04/01/2016", "abs": 29, "rel": 23},
								{"date": "05/25/2016", "abs": 32, "rel": 28},
								{"date": "06/20/2016", "abs": 35, "rel": 31},
								{"date": "08/11/2016", "abs": 40, "rel": 35}
							]
			_(ic.chartData).forEach(function(d) {
				//debugger;
				d.date = parseTime(d.date);
				d.abs = d.abs;
				d.rel = d.rel;
			})
			//tc.model = ngModel;
			ic.sendForEdit = function(_page, _id) {
				console.log("sending for edit", _page, _id)
				layoutSetup.idToEdit[_page] = _id;
				notify.sendMsg("SendingForEdit", {"page": _page, "id":_id});
			};
			//console.log("inside directive ideaComp");
			ic.init = function(){
				let diffDays = null;
				let datenow = new Date();

				if(ic.idea.equityIdeaLegs.length > 1) {
					if(ic.idea.ideaTitle.length > 12) {
						ic.label = ic.idea.ideaTitle.substring(0, 12);
						ic.label += " ...";
					}else{
						ic.label = ic.idea.ideaTitle;
					}
					
					ic.tickerBucket = "pair";
				}else{
					ic.tickerBucket = "single";
					ic.label = ic.idea.equityIdeaLegs[0].ideaTicker;
					ic.direction = _.capitalize(ic.idea.equityIdeaLegs[0].ideaDirection);
				}
				ic.dateCreated = $filter('date')(ic.idea.createDate, "MMM dd ''yy");
				diffDays = days_between(new Date(ic.idea.createDate), datenow);
				ic.timeSinceCreation = diffDays < 2 ?  diffDays + " Day" : diffDays + " Days";
				ic.openIdeas   = _.filter(ic.idea.portfolioIdeas, function(o){ return o.ideaState.ideaState !== 'Closed' });
    			ic.closedIdeas  = _.filter(ic.idea.portfolioIdeas, ["ideaState.ideaState", "Closed"]);

			}


			ic.init();
		},
		link: function(scope, elem, attrs){
			elem.bind('click', function(){
				console.log(scope.ideadata);
				scope.$apply(scope.sendidea({idea:scope.ideadata}))
			});

			
		}
	}
}

export default angular.module('directives.ideaComp', [])
  .directive('ideaComp', ideaComp)
  .name;
  