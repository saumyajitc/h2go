import angular from 'angular';
import angularui from 'angular-ui-bootstrap';
import  ModalConstants, { modalConstants } from '../layout/services/modal.constants';

class ModalService {
  constructor($rootScope, $log, $uibModal) {
  	this.modalConstants = modalConstants;
    this.rootScope = $rootScope;
    this.logger = $log;
    this.modalWin = {};
    this.uibModal = $uibModal;
  }

	openModal (_title, _content, _type, _obj, _size,  _status, _message ,_yesLabel, _noLabel) {
         //console.log("at least called");
        let lcl = this;
        lcl.modalWin.title      =   _title; // Appears in the header
        lcl.modalWin.content    =   _content; // to be appended with event to determine parent dispatcher
        lcl.modalWin.type       =   _type;
        lcl.modalWin.obj        =   (_obj !== undefined) ? _obj : {};
        lcl.modalWin.message    =   _message; // message to show(if at all)
        lcl.modalWin.yesLabel   =   _yesLabel;
        lcl.modalWin.noLabel    =   _noLabel;
        lcl.modalWin.status     =   _status; //Possible values are 'default', 'info', 'warning', 'error', 'confirm'
        
         
        var tmplUrl;
        var controllerToUse;
        if ( lcl.modalWin.type === modalConstants.EXCEPTIONS ) {
          tmplUrl = require("../layout/partials/modals/modal_exceptions.html");
          controllerToUse= "GenericModalController as genericModalController";
        }else if ( lcl.modalWin.type === modalConstants.GENERIC ) {
          tmplUrl = require("../layout/partials/modals/modal_generic.html");
          controllerToUse= "GenericModalController as genericModalController";
        }
         
        let modalInstance = lcl.uibModal.open({
          template: tmplUrl,
          backdrop: 'static',
          size: _size,
          controller: controllerToUse,
          windowClass:'modal fade in',
          resolve: {
              modalWin: function(){
                return lcl.modalWin;
              }
            }
          });
         
        
        modalInstance.result.then(function (selectedItem) {
          lcl.selected = selectedItem;
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
    };
 
}

export default angular.module('services.modal', [angularui])
  .service('modalService', ModalService)
  .name;
