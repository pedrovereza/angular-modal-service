describe('ModalService', function () {
  
  var $scope, instance, modalStack;

  beforeEach(function () {

    module('jzimermann.modal-service');
    
    inject(function ($rootScope, $injector) {
      $scope = $rootScope;
      modalStack = $injector.get('$modalStack');
      instance = $injector.get('ModalService');
    });
  });

  describe('confirm', function () {
  });

  describe('open', function () {
  });

  describe('closeAll', function () {

    it('should close all the modal on top of the page', function () {
      spyOn(modalStack, 'dismissAll');
      instance.closeAll();
      expect(modalStack.dismissAll).toHaveBeenCalled();
    });
  });
});