'use strict';
angular.module('haochiquanApp')
    .controller('PanelsCtl', function ($scope) {
        $scope.publishDialog = false;

        $scope.showPublishDialog = function(state) {
            if ('open' === state) {
                $scope.publishDialog = true;
            } else {
                $scope.publishDialog = false;
            }
        };
    });
