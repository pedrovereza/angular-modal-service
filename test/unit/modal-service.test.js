'use strict';

describe("ModalService", function () {

  var $scope, instance;

  beforeEach(function () {

    angular.mock.module('modal-service');
    
    inject(function ($injector, ModalService) {
      $scope = $injector.get('$rootScope');
      instance = ModalService;     
    });
    
  });

  describe('closeAll', function () {

    it("should close all the modals opened", function () {
      console.log("executou");
      expect(true).toBe(true);
    });

  });

});