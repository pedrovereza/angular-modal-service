'use strict';

angular.module('jzimermann.modal-service', ['ui.bootstrap'])
.service('ModalService', ['$rootScope', '$modalStack', '$modal',
  function ($rootScope, $modalStack, $modal) {

  this.open = function (modalScope, templateUrl, size) {
    this.closeAll();
    var modalOptions = {
      templateUrl: templateUrl,
      size: size,
      scope: modalScope
    };
    return $modal.open(modalOptions).result;
  };

  this.closeAll = function () {
    $modalStack.dismissAll();
  }
}]);
    
  
