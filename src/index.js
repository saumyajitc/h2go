import _ from 'lodash';

import angular from 'angular';
import angularui from 'angular-ui-bootstrap';
import uirouter from 'angular-ui-router';
// require("../node_modules/angular-toastr/dist/angular-toastr.css");

import routing from './config';
import layout from './main/layout';

const myModule = angular.module('h2go_app', [uirouter, angularui, layout]);

myModule.run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
       
}]);

myModule.config(routing);

if (ON_TEST) {
	require('angular-mocks/angular-mocks');
}

if (module.hot) {
  module.hot.accept();
}