angular.module('modal-service', ['ui.bootstrap'])
  .service('ModalService', function ($modal, $modalStack) {

    this.confirm = function (message, subMessage, yesText, noText, templateUrl, size) {
      
      var modalScope = "";
      modalScope.message = message;
      modalScope.subMessage = subMessage;
      modalScope.yesText = yesText;
      modalScope.noText = noText;
      
      return this.open(modalScope, templateUrl, size); 
    }

    this.open = function (modalScope, templateUrl, size) {

      this.closeAll();
      
      var modalScope = "";
      var modalOptions = $modal.open({
        templateUrl: templateUrl,
        size: size,
        scope: modalScope
      });

      return $modal.open(modalOptions).result;
    };

    this.closeAll = function () {
      $modalStack.dismissAll();
    }
  });
