'use strict';

/**
 * @ngdoc overview
 * @name haochiquanApp
 * @description
 * # haochiquanApp
 *
 * Main module of the application.
 */
angular
  .module('haochiquanApp', ["ngRoute", "ngCookies"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
