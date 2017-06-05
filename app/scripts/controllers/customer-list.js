'use strict';

angular.module('customerClientApp')
  .controller('CustomerListCtrl', function ($scope,customerSvc) {
    $scope.customers = customerSvc.query();
  });
