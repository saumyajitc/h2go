'use strict';

import angular from 'angular';

class NotifyService {
  constructor($rootScope, $log) {
    this.rootScope = $rootScope;
    this.logger = $log;
  }

  sendMsg(_msg, _data) {
  	this.data = _data || {};
  	this.rootScope.$emit(_msg, _data);
  	this.logger.info(_msg + ' message sent');
  	this.logger.info(_data + ' data from message');
  }

  getMsg(_msg, _func, _scope) {
  	var unbind = this.rootScope.$on(_msg, _func);
  	if(_scope){
  		_scope.$on('$destroy', unbind);
  	}
  }
 
}

export default angular.module('services.notify', [])
  .service('notify', NotifyService)
  .name;
