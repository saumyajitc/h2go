import './scss/layout.scss';

import uiselect from 'ui-select';
import toastr from 'angular-toastr';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import { Grid, initialiseAgGridWithAngular1 } from "ag-grid";

import routing from './config';
import toastrConfig from './toastr.config';

//Modules
import login from './modules/login';


//Controllers
import { LayoutController } from './controllers/layout.controller';
import { GenericModalController } from  './controllers/modals/generic.ctrl.modal'


//Services
import layoutSetup from './services/layoutSetup.service';
import notify from '../utils/notify.service';
import modalService from '../utils/modal.service';
import appHttpInterceptor from '../utils/appHttp.interceptor';


//Filters
import PercentFilter from '../utils/percent.filter';

//Directives
import NoNegativesDirective from './directives/nonegatives/nonegatives-comp';
import MaxValueDirective from './directives/maxvalue/maxvalue-comp';
import AlertsDirective from './directives/alerts/alerts-panel';

initialiseAgGridWithAngular1(angular);

export default angular.module('h2go_app.layout', [uiselect, toastr, ngAnimate, ngSanitize, ngMessages, login, layoutSetup, notify, modalService, appHttpInterceptor, "agGrid", NoNegativesDirective, MaxValueDirective, AlertsDirective])
	.run(['$rootScope', '$state', '$templateCache', function($rootScope, $state, $templateCache){
			$rootScope.reportInitialized = false;
			$rootScope.previousState = '';
			$rootScope.currentState = '';

			//Module level flags for checking on data edits to update cache
			$rootScope.userModified			= false;
			
			$rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
				$rootScope.previousState = from.name;
				$rootScope.currentState = to.name;
				console.log('Previous state:'+$rootScope.previousState);
				console.log('Current state:'+$rootScope.currentState);
				
			});

			//Load the Template Cache with Error Messages
			let errorMessages = require('./partials/error-messages.html');
			$templateCache.put('error_messages', errorMessages);

			//Load the Template Cache with Toastr Templates
			let toastrTemplate = require('./partials/toastr-template.html');
			$templateCache.put('templates/toastr/toastr.html', toastrTemplate);

			//Load the Template Cache generic Modal
			let genericModalTemplate = require('./partials/modals/modal_generic.html');
			$templateCache.put('templates/modals/modal_generic.html', genericModalTemplate);

			//Load the Template Cache with Toastr Templates
			let modalExceptionsTemplate = require('./partials/modals/modal_exceptions.html');
			$templateCache.put('templates/modals/modal_exceptions.html', modalExceptionsTemplate);
			
		}])
	.config(routing)
	.config(function(uiSelectConfig) {
		uiSelectConfig.theme = 'bootstrap';
		uiSelectConfig.searchEnabled = false;
	})
	.config(toastrConfig)
	.filter('percentfilter', PercentFilter())
	.controller('LayoutController', LayoutController)
	.controller('GenericModalController', GenericModalController)
	.name;