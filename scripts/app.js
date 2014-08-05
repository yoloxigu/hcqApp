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
  .module('haochiquanApp', ["ngRoute", "ngCookies", "ngResource"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/index.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
