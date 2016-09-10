import angular from 'angular';

function nonegatives() {

   return {
      require: 'ngModel',
      restrict: "A",
      link: function(scope, elem, attr, ngModel) {
          ngModel.$parsers.unshift(function(value) {
             var valid = !(value && /-/g.test(value));
            //  var valid = value.match(/-/g);
             ngModel.$setValidity('nonegatives', valid);
             return valid ? parseFloat(value) : undefined;
          });
        }
   };
}

export default angular.module('directives.nonegatives', [])
  .directive('nonegatives', nonegatives)
	.name;
