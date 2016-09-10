import angular from 'angular';
import  ServiceConstants, { serviceConstants } from '../../services/service.constants';
import * as utils from './utils'

function acContributorList($timeout, $http, $q, $filter, notify, modalService, layoutSetup) {

  require('./contributors.scss');
	return {
		restrict: 'E',
		require: "ngModel",
		scope: {
			outerModel: "=ngModel", // TODO - try to remove, used in watch
			options: "=",
			formname: "=",
			id: "@",
			required: "@"
		},
		template: require('./partials/template.html'),
		controllerAs: 'cl',
		link: function (scope, elem, attr, ngModel) {

			scope.partials = './src/main/layout/directives/contributors/partials/'
			scope.formData = {};
			// set a model if we don't have one
			scope.items = scope.outerModel || [];
			scope.emptyModel = function(){
				return _.isEmpty(scope.displayItems())
			}
			let options = scope.options || {};

			//OPTIONS OBJECT TEMPLATE. DONT REMOVE UNTIL DOCUMENTATIONS IS AVAILABLE
			// {
			// 	limit: null,
			// 	display: 5,
			// 	template: 'generic',
			// 	dataType: 2,
			// 	route: 'user/SOE',
			//  transform: function(){},
			//	label: scope.id,
			//  errorHandling: true,
			// 	payload: 'contributorsId'
			// }

			//set values passed in as attrs, explicitly set options should overwrite object options.
			if(attr.limit || options.limit){
				scope.limit = attr.limit || options.limit; // default null - no limit
			}
			scope.display = attr.display || options.display || 5; // default 5
			let template = attr.template || options.template || "error"; // required
			scope.template = scope.partials+template+'.html';
			let dataType = attr.dataType || options.dataType || 2; // defaults to 2:multiple (sends as array), alterntative is 1: single (sends as single string or object)
			let ROUTE = attr.route || options.route || 'user/SOE';
			let PAYLOAD = attr.payload || options.payload || null;
			let transform = attr.transform || options.transform; // optional function to manipulate data on return from server.
			scope.label = attr.label || options.label; 
			if(_.isBoolean(attr.errorHandling)){
				scope.errorHandling = attr.errorHandling;
			} else if (_.isBoolean(options.errorHandling)){
				scope.errorHandling = options.errorHandling;
			} else {
				scope.errorHandling = true;
			}
			// let requestMethod = attr.requestMethod || options.requestMethod || "POST";

			// show or hide the "show all" button
			scope.showAll = function(){
				if (scope.items && scope.displayItems().length > scope.display) {
					return true;
				} else {
					return false;
				}
			};

			// update when the field loses focus (on blur)
			scope.update = function(input){
				if(input && input.length){
					updateModel(input);
				}
			};

			scope.keyPress = function(event, input){
				scope.validated = false;
				if (event.keyCode === 13 || event.keyCode === 9) {
					//don't move away, unless it's empty
					if(input && input.length){
						event.preventDefault();
						//update
						updateModel(input);
					}
				}
			};

			let removedItems = [];
			scope.removedItems = function(){
				return removedItems;
			}
			//remove an item	
			scope.remove = function(item){
				item.action = "D";
				removedItems.push(item);
			};

			scope.removeSingle = function(item){
				let idx = scope.items.indexOf(item);
				scope.items.splice(idx,1);
			};

			//open the showAll modal
			scope.openModal = function(title, type){
				title = title || 'Portfolio Contributors'; // TODO - remove defaulting, only here to keep from breaking;
				type = type || 'contributors'; // TODO - remove defaulting, only here to keep from breaking;
				modalService.openModal(title, '', type , {model: scope.items, removedItems: removedItems}, 'md', 'default', "")
			};

			scope.displayItems = function(){
				return _.filter(scope.items, function(item) {
					return item.action === null || item.action === undefined;
				});
			}

			function checkContributors(arr, str) {

				// check to see if we have the item cached in removedItems and use that entry first.
				arr = undeleteCheck(arr);

				// if there's anything left in the Array, check against the server
				if(arr.length > 0){
					return $http.post(serviceConstants.SERVICE_API + ROUTE, setPayload(arr))
					.then(response => {
						let data = response.data;

						return data;
					})
					.catch(err=>{
						if(err){console.log(err)}
					});
				} else {
					return $q.when({found:[], notFound: []});
				}
			}
			
			function updateModel(input) {
				//clean any watches on model changes
				if (typeof unwatch === 'function'){ unwatch(); }
				let str = cleanInput(input);
				let arr = arrayify(str);

				//if we're over the limit already, or trying to submit too many, return and do nothing/
				if(scope.limit && (scope.items && scope.items.length>=scope.limit) || arr.length>scope.limit) {
					scope.limitError = true; 
					scope.$apply(); 
					return; 
				} else {
					scope.limitError = false;
				}
				
				checkContributors(arr, input)
				.then(newItems =>{
					let found = newItems.found;
					//don't allow anything over the limit
					if(found && scope.limit){
						found = found.splice(-scope.limit);
					}

					// run any custom transformers sent in
					if(transform){
						for (let i in found){
							found[i] = transform(found[i]);
						}
					}

					// remove any duplicates that were returned
					// _.pullAllBy(found, scope.items, 'user.userDimension.cghsoeid')	
					_.pullAllWith(found, scope.items, _.isEqual);
					//set the new values.
					angular.copy(scope.items.concat(found), scope.items);
					//update the parent model and the local view
					ngModel.$setViewValue(scope.items);
					//push the not found users to the input, needs timeout to work with the preventDefault
					$timeout(function () {
						scope.formData.input = newItems.notFound.join(", ");
						scope.validated = true;
					}, 0)
				})
				.catch(err => err ? console.log(err) : console.log("Unknown Error"))
			}



			function cleanInput(str){
				// remove spaces and convert and commas to semi colons
				str = str.replace(/\s*/g, "").replace(/,/g, ';');
				str = str.toUpperCase();
				return str;
			}

			function arrayify(str){
				// turn into an array at semi colon
				let arr = str.split(';');
				// drop the last item if it's empty - i.e. if there was a trailing ;
				if (arr[arr.length - 1] === '') {
					arr.pop();
				}
				return arr
			}
			
			function undeleteCheck(arr){
				for(let j in removedItems){
					for (let i in arr){
						// console.log(removedItems[j], arr[i], _.has(removedItems[j], arr[i]))
						if ((removedItems[j].user && removedItems[j].user.userDimension.cghsoeid === arr[i]) || removedItems[j].ricCode === arr[i]){
						// if (_.has(removedItems[j], arr[i])){
							removedItems[j].action = null;
							removedItems.splice(j, 1);
							arr.splice(i, 1);
						}	
					}
				}
				return arr
			}

			function setPayload(arr){
				let payload = {};
				if (PAYLOAD){
					payload[PAYLOAD] = arr;
				} else {
					payload = arr;
				}
				return payload;
			}

			// data has been refreshed, so clear the removed items cache
			notify.getMsg("SetDefaultPortfolio", (_event, _data) => {
				removedItems = [];
				//update the model and view if data is loaded later via async
				setWatch()
			})

			function setWatch(){
				let unwatch = scope.$watchCollection("outerModel", function(newItems, oldVal){
					if (newItems && newItems !== scope.items) {
						angular.copy([].concat(newItems), scope.items);
						ngModel.$setViewValue(scope.items);
						unwatch();
					}
				});
			}

			//This method is targeted to make all scope watches for garbage collection
	        scope.$on('$destroy', function destroy() {
			    //stop watching when scope is destroyed
			    if(typeof unwatch === 'function') unwatch();
			});

		}
	};
}

export default angular.module('directives.acContributorList', [])
  .directive('acContributorList', acContributorList)
	.name;

 