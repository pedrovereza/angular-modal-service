angular.module('modal-service', ['$rootScope', '$modal', '$modalStack'])
  .service('modalService', function($rootScope, $modal, $modalStack) {

    var modalInstance;

    this.confirm = function (message, subMessage, yesText, noText, templateUrl, size) {
      
      var modalScope = $rootScope.$new(true);
      modalScope.message = message;
      modalScope.subMessage = subMessage;
      modalScope.yesText = yesText;
      modalScope.noText = noText;
      
      return this.open(modalScope, templateUrl, size); 
    }

    this.open = function (modalScope, templateUrl, size) {

      this.closeAll();
      
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
