export default function(ngModule){

	if (ON_TEST) {
		require('./init-hello.test')(ngModule);
	}

	ngModule.directive('initHello', function(){
		require('./init-hello.scss');
		return {
			restrict: 'E',
			scope:{},
			template: require('./init-hello.html'),
			controllerAs: 'vm',
			controller: function(){
				const vm = this;

				vm.greeting = "Hello World";
				console.log("inside directive initHello");
			}
		}
	})
};