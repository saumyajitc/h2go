export default function toastrConfig(toastrConfig) {
  angular.extend(toastrConfig, {
    closeHtml: '<button>&times;</button>',
    iconClasses: {
      error: 'toasta-error',
      info: 'toasta-info',
      success: 'toasta-priority',
      warning: 'toasta-warning'
    },  
    messageClass: 'toasta-message',
    onHidden: null, // callback. function(clickClosed, toasta)
    onShown: null,
    onTap: null,
    tapToDismiss: true, //Whether the toast should be dismissed when it is clicked
    templates: {
      toast: 'templates/toastr/toastr.html',
    },
    timeOut: 0,
    extendedTimeOut: 0,
    titleClass: 'toasta-head',
    toastClass: 'toasta',
    autoDismiss: true,
    containerId: 'toast-container',
    maxOpened: 5,    
    newestOnTop: true,
    positionClass: 'toasta-container-position',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });
}