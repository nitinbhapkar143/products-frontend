'use strict';

/**
 * @ngdoc overview
 * @name productApp
 * @description
 * # productApp
 *
 * Main module of the application.
 */
const baseUrl = `http://localhost:3000/`
angular
  .module('productApp', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    const product = {
      title: 'product',
      name: 'product',
      url: '/product',
      controller: 'productCtrl',
      templateUrl: 'views/product.html'
    };

    $stateProvider.state(product);
    $urlRouterProvider.otherwise('/product');
  })
