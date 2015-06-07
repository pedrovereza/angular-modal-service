describe('ModalService', function () {
  
  var $scope, instance, modalStack, modal;

  beforeEach(function () {

    module('jzimermann.modal-service');
    
    inject(function ($injector) {
      $scope = $injector.get('$rootScope');
      modalStack = $injector.get('$modalStack');
      modal = $injector.get('$modal');
      instance = $injector.get('ModalService');
    });
  });

  describe('open', function () {

    it('should open a modal', function () {
      spyOn(modal, 'open').andCallThrough();
      instance.open($scope, 'template.html', 'sm');
      expect(modal.open).toHaveBeenCalled();
    });

    it('should close existing modals when opening a new one', function () {
      spyOn(instance, 'closeAll').andCallThrough();
      instance.open($scope, 'template.html', 'sm');
      expect(instance.closeAll).toHaveBeenCalled();
    });
  });

  describe('closeAll', function () {

    it('should close all the modal on top of the page', function () {
      spyOn(modalStack, 'dismissAll');
      instance.closeAll();
      expect(modalStack.dismissAll).toHaveBeenCalled();
    });
  });
});
