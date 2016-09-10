import "./scss/home.scss";

import uirouter from 'angular-ui-router';

import routing from './home.routes';
import { HomeController } from './controllers/home.controller';
import { PerformanceController } from './controllers/performance.controller';
import { FiltersController } from './controllers/filters.controller';
import { TabsController } from './controllers/tabs.controller';
import { DetailsController } from './controllers/details.controller';

import userSetup from '../../services/user.service';
import layoutSetup from '../../services/layoutSetup.service';
import homeSetup from './services/homeSetup.service';
import notify from '../../../utils/notify.service';

import ideaItemDirective from './directives/idea/idea-comp';
import itemDetailsDirective from './directives/detail/details-comp';
import portfolioItemDirective from './directives/portfolio/portfolio-comp';
import relatedCharts from './directives/charts/idea-perf-line-chart-comp';
import portPerfCharts from './directives/charts/port-perf-diff-chart-comp';

export default angular.module('citiAlphaApp.layout.home', [uirouter, userSetup, layoutSetup, homeSetup, notify, ideaItemDirective, portfolioItemDirective, relatedCharts, portPerfCharts, itemDetailsDirective])
  .config(routing)
  .controller('HomeController', HomeController)
  .controller('PerformanceController', PerformanceController)
  .controller('FiltersController', FiltersController)
  .controller('TabsController', TabsController)
  .controller('DetailsController', DetailsController)
  .name;