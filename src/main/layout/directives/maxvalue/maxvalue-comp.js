import angular from 'angular';
import LayoutConstants, {layoutConstants} from '../../services/layout.constants';

function maxvalue($filter) {

    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elem, attr, ngModel) {

            ngModel.$validators.onlynum = function(modelValue, viewValue){
               // let convert = parseFloat(viewValue);
                let num_pattern = "[0-9]*";
                var re = new RegExp(num_pattern);
                let validVal = re.test(viewValue);//isNaN(parseFloat(viewValue)) ? false : true;
                return validVal;
            };

            ngModel.$validators.maxnum = function(modelValue, viewValue){
                let limitLength = layoutConstants.MAX_LENGTH;
                let limitDecimal = layoutConstants.MAX_DECIMALS;
                let pattern = "^[-+]?[0-9]{1,"+limitLength+"}(\\.[0-9]{1,"+limitDecimal+"})?$";
                var re = new RegExp(pattern);
                var valid = (viewValue && re.test(viewValue));
                
                return valid;
                //? parseFloat(viewValue) : undefined;
            };
        }
    };
}

export default angular.module('directives.maxvalue', [])
    .directive('maxvalue', maxvalue)
    .name;