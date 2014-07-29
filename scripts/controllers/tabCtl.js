'use strict';
angular.module('haochiquanApp')
    .controller('TabCtl', function($scope) {

        $scope.tabVisited = [];

        $scope.tabClick = function(length, index) {
            event.preventDefault();
            event.stopPropagation();
            if (0 === $scope.tabVisited.length) {
                for (var i = 0; i < arguments[0]; i++) {
                    if (arguments[1] === i) {
                        $scope.tabVisited.push(true);
                    } else {
                        $scope.tabVisited.push(false);
                    }
                }
            } else {
                for (var j = 0; j < $scope.tabVisited.length; j++) {
                    if (j === arguments[1]) {
                        $scope.tabVisited[j] = true;
                    } else {
                        $scope.tabVisited[j] = false;
                    }
                }
            }
        };

        $scope.replyDialog = false;

        $scope.openReplyDialog = function() {
            $scope.replyDialog = !$scope.replyDialog;
        };
    })
    .controller('SubTabCtl', function($scope) {
        // subTab area
        $scope.selected = [false, false, false];
        $scope.hadin = [true, true, true];
        $scope.hadout = [false, false, false];

        $scope.choose = function (index) {
            $scope.selected.forEach(function(value, key) {
                if (index === key) {
                    $scope.selected[key] = !$scope.selected[key];
                    $scope.hadin[key] = !$scope.hadin[key];
                    $scope.hadout[key] = !$scope.hadout[key];

                } else {
                    $scope.selected[key] = false;
                    $scope.hadin[key] = true;
                    $scope.hadout[key] = false;
                }
            });
        };

        $scope.filted = true;
        $scope.subNav = function(filter) {
            if ('all' === filter || 'invite' === filter) {
                $scope.filted = true;
            } else {
                $scope.filted = false;
            }
        };


        // filter scope
        $scope.isVisited = [];

        $scope.visiter = function(length, index) {
            if (0 === $scope.isVisited.length) {
                for (var i = 0; i < length; i++) {
                    if (index === i ) {
                        $scope.isVisited.push(true);
                    } else {
                        $scope.isVisited.push(false);
                    }
                }
            } else {
                for (var j = 0; j < $scope.isVisited.length; j++) {
                    if (j === index) {
                        $scope.isVisited[j] = true;
                    } else {
                        $scope.isVisited[j] = false;
                    }
                }

            }
        };
    });
