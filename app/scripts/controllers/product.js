'use strict';

/**
 * @ngdoc function
 * @name productApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productApp
 */
angular.module('productApp')
  .controller('productCtrl', function ($scope, productService) {
    $scope.loading = true;
    $scope.search = {}
    productService.getProducts().then(response => {
      $scope.products = response.products;
      $scope.loading = false;
    })

    $scope.filter = () => {
      if (!$scope.search.searchString) return
      $scope.errorMessage = false;
      $scope.loading = true;
      productService.searchProducts($scope.search.searchString).then(response => {
        if (response.status) {
          $scope.products = response.products;
          $scope.errorMessage = false;
        } else {
          $scope.products = [];
          $scope.errorMessage = response.message;
        }
        $scope.loading = false;
      })
    }

    $scope.clear = () => {
      $scope.errorMessage = false;
      $scope.search.searchString = ""
      $scope.loading = true;
      productService.getProducts().then(response => {
        $scope.products = response.products;
        $scope.loading = false;
      })
    }
  });
