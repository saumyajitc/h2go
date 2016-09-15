export default function routes($stateProvider) {
  
  $stateProvider
    .state('layout.login', {
            url: 'login',
            template: require('./index.html'),
            controller: 'LoginController',
            controllerAs: 'login',
            params: {},
            resolve: {}
    });
}
