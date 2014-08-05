'use strict';

/**
 * @ngdoc function
 * @name haochiquanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the haochiquanApp
 */
angular.module('haochiquanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.ads = [
        {
            restaurantName: '餐厅名称 one',
            restaurantPhoto: 'uploads/restaurants/u188.jpg'
        },
        {
            restaurantName: '餐厅名称 two',
            restaurantPhoto: 'uploads/restaurants/u190.JPG'
        },
        {
            restaurantName: '餐厅名称 three',
            restaurantPhoto: 'uploads/restaurants/u192.jpg'
        },
        {
            restaurantName: '餐厅名称 four',
            restaurantPhoto: 'uploads/restaurants/u194.jpg'
        },
        {
            restaurantName: '餐厅名称 five',
            restaurantPhoto: 'uploads/restaurants/u208.jpg'
        },
        {
            restaurantName: '餐厅名称 six',
            restaurantPhoto: 'uploads/restaurants/u208.jpg'
        }
    ];
  });
