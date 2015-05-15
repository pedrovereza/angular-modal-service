angular.module('modal-service', ['$rootScope', '$modal', '$modalStack'])
  .service('modalService', function($rootScope, $modal, $modalStack) {

    var modalInstance;

    this.open = function (templateUrl, size) {
      var modalScope = $rootScope.$new(true);

      var modalOptions = $modal.open({
        templateUrl: templateUrl,
        size: size,
        scope: modalScope
      });

      modalInstance = $modal.open(modalOptions).result;
    };

    this.close = function () {
      modalInstance.close();
    };

    this.closeAll = function () {
      $modalStack.dismissAll();
    }

  });