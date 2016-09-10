function selectOnClick($window) {
	return {
		scope:{},
		link: function(scope, element, attrs) {
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
      }
	}
}

export default angular.module('directives.selectOnClickComp', [])
  .directive('selectOnClick', selectOnClick)
  .name;
  