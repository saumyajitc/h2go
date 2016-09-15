import "./scss/login.scss";

import uirouter from 'angular-ui-router';

import routing from './login.routes';
import { LoginController } from './controllers/login.controller';

import userSetup from '../../services/user.service';
import layoutSetup from '../../services/layoutSetup.service';
import loginSetup from './services/loginSetup.service';
import notify from '../../../utils/notify.service';

import ideaItemDirective from './directives/idea/idea-comp';

export default angular.module('h2go_app.layout.login', [uirouter, userSetup, layoutSetup, loginSetup, notify, ideaItemDirective])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;