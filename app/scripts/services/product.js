'use strict';

/**
 * @ngdoc service
 * @name productApp.productService
 * @description
 * # product
 * Service in the productApp.
 */

class productService {
  constructor($http) {
    this.$http = $http
  }
  getProducts() {
    return this.$http.get(baseUrl + 'products/products').then(response => {
      return response.data;
    })
  }
  searchProducts(searchString) {
    return this.$http.post(baseUrl + 'products/search', { searchString: searchString }).then(response => {
      return response.data;
    })
  }
}

productService.$inject = ['$http']
angular.module('productApp').service('productService', productService)
