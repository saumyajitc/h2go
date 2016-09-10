import angular from 'angular';
import  ServiceConstants, { serviceConstants } from '../../services/service.constants';

function acMultiSelect($q, notify) {

  require('./multi-select.scss');
	return {
		restrict: 'E',
		require: "ngModel",
		scope: {
			outerModel: "=ngModel", // TODO - try to remove, used in watch
			options: "=",
            data: "="
		},
        transclude: true,
		template: require('./partials/template.html'),
		link: function (scope, elem, attr, ngModel) {

            //TODO - tempData
            const data = scope.data;

            let dropdownOpen = false;
            scope.selected = scope.outerModel || [];
            scope.placeholder = "Select";
            // scope.model = scope.outerModel || {};
            scope.items = [data, {}, {}, {}];
            
            scope.showPlaceholder = function(){
                if(!scope.selected){return true;}
                // shows the placeholder if there are no pills
                return scope.selected.length ? false : true;
            };

            scope.dropdownOpen = function(){
                return dropdownOpen;
            };

            scope.toggleDropdown = function(e){
                //don't do anything if this is a selectItem click
                if(angular.element(e.target).hasClass('icon')){
                    return;
                }
                dropdownOpen = !dropdownOpen;
                if(!dropdownOpen){
                    resetHighlights(data);
                    scope.items = [data, {}, {}, {}];
                }
            };

            scope.addHover = function(item){
                item.hover = true;
            };

            scope.removeHover = function(item){
                delete item.hover;
            };


            //sets next child menu
            scope.setItems = function(e, num, item){
                //don't do anything if this is a selectItem click
                if(angular.element(e.target).hasClass('icon')){
                    return;
                }
                //reset old things.
                for (var i = num; i < 4 ; i++){
                    delete scope.items[i].highlighted;
                    scope.items[i] = {};
                }
                //set new things.
                scope.items[num] = item;
                scope.items[num].highlighted = true;
            };

            scope.selectItem = function(item, bool){
                if(item.parentValue === bool){return;}
                if(!item.selected){
                    scope.selected.push(item);
					ngModel.$setViewValue(scope.selected);
                }
                //if it's already been selected, and the user is selecting the same  inclusion type, 
                if(item.selected && (item.allowed === bool)){
                    scope.removeItem(item);
                    ngModel.$setViewValue(scope.selected);
                    return;
                }
                delete item.parentValue; // clean up the item a bit
                item.allowed = bool;
                item.selected = true;
                setChildren(item.itemItems, bool);
            };

            scope.removeItem = function(item){
                _.pull(scope.selected, item);
                delete item.selected;
                // item.allowed = false;
                setChildren(item.itemItems, null);
            };

            scope.msAllowed = function(item){
                let pV = item.parentValue;
                let allowed = item.allowed;
                let sel = item.selected;
                if((allowed && sel) || (!sel && pV === true)){ return 'ms-allowed';}
            }

            scope.msExcluded = function(item){
                let pV = item.parentValue;
                let allowed = item.allowed;
                let sel = item.selected;
                if((!allowed && sel) || (!sel && pV === false)){ return 'ms-excluded';}
            }
            scope.msHighlighted = function(item){
                let last = scope.last(item);
                let sel = item.selected;
                let hl = item.highlighted;
                if(hl && !sel && !last){return 'ms-highlighted';}
            }
            
            scope.showPipe = function(item){
                let pV = item.parentValue;
                if (pV === undefined || pV === null){return true;}
                else {return false;}
            }

            scope.last = function(item){
                return (item.itemItems.length > 0) ? false : true;
            }

            // sets all childrend of the current item, that aren't already selected, to the same value as the parent.'
            function setChildren(items, bool){
                for(let i = 0; i < items.length; i++){
                    items[i].parentValue = bool;
                    if(!items[i].selected) {
                        items[i].allowed = bool; 
                        if(items[i].itemItems.length > 0){ setChildren(items[i].itemItems, bool); }
                    } else {
                        collapseChildren(items[i], bool);
                    }
                }
            }

            // collapses all child items of selected parent which have the same inclusion status to keep everything clean.
            function collapseChildren(item, bool){
                if(item.selected && (item.allowed === bool)){
                    delete item.highlighted;
                    scope.removeItem(item);
                    for(let i = 0; i < item.itemItems.length; i++){
                        collapseChildren(item.itemItems[i], bool)
                    }
                } 
            }

            function resetHighlights(item){
                if(item.highlighted){delete item.highlighted;}
                for(let i = 0; i < item.itemItems.length; i++){
                    if(item.itemItems[i].highlighted){delete item.itemItems[i].highlighted;}
                    if(item.itemItems[i].itemItems.length > 0){ resetHighlights(item.itemItems[i]); }
                }
            }

            //update the model and view if data is loaded later via async
			let unwatch = scope.$watchCollection("outerModel", function(newItems, oldVal){
				if (newItems) {
					scope.selected = newItems; // angular.copy(newItems, scope.selected)
					ngModel.$setViewValue(scope.selected);
					unwatch();
				}
			});
        }
    };
}

export default angular.module('directives.acMultiSelect', [])
  .directive('acMultiSelect', acMultiSelect)
	.name;
