function inputFormatComp($filter, $window) {
	return {
		require: "ngModel",
		scope:{
			format: "="
		},
		link: function(scope, element, attrs, ngModelController) {
			
		//This method is meant to select the text inside the input box on focus
			element.bind('click', function(){
				 if (!$window.getSelection().toString()) {
			          if(this.type === 'number'){
					 		this.select();
					 	}else if(this.type === 'text'){
					 		this.setSelectionRange(0, this.value.length)	
					 	} 
			        }
			})

		//This method is targeted to reflect any change in the model to update the input content
			let unwatch = scope.$watch('format', function(newval, oldval){
				//
				//var length = ngModelController.$viewValue !== undefined ? ngModelController.$viewValue.length : 0;
				var plainNumber = ngModelController.$viewValue !== "" ? parseFloat(ngModelController.$viewValue) : "";
				if(plainNumber !== "" && plainNumber !== null){
					if(scope.format === "percent"){
		          		element.val($filter('percentfilter')(plainNumber));
		          	}else if(scope.format === "amount"){
		          		element.val($filter('number')(plainNumber));
		          	}
				}
            	return plainNumber;  //converted
			});

			ngModelController.$render = function(){
				//
			}

		//convert data from view format to model format
	        ngModelController.$parsers.push(function(viewValue) {
	          var plainNumber = viewValue;
		          if(plainNumber !== ""){
		          	if(scope.format === "percent"){
		          		element.val($filter('percentfilter')(plainNumber));
		          	}else if(scope.format === "amount"){
		          		element.val($filter('number')(plainNumber));
		          	}
		          }
            	return plainNumber;  //converted
	        });

	    //convert data from model format to view format
	        ngModelController.$formatters.push(function(modelValue) {
	         	var plainNumber = modelValue !== null && modelValue !== undefined ? modelValue : "";
	         	if(plainNumber !== "" && plainNumber !== null){
		          	if(scope.format === "percent"){
		          		element.val($filter('percentfilter')(plainNumber));
		          	}else if(scope.format === "amount"){
		          		element.val($filter('number')(plainNumber));
		          	}
		          }
            	return plainNumber;  //converted
	        });

	    //This method is targeted to make all scope watches for garbage collection
	        scope.$on('$destroy', function() {
			    //stop watching when scope is destroyed
			    unwatch();
			});
      }
	}
}

export default angular.module('directives.inputFormatComp', [])
  .directive('inputFormatComp', inputFormatComp)
  .name;
  