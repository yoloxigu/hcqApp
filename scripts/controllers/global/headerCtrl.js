'use strict';
angular.module('haochiquanApp')
    .factory('UserAccount', function($resource) {
        return $resource('http://haochiquan.com/Api/UserInfo/read/name/wfwalking', {}, {
            jsonpquery: {
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: false
            }
        });
    })
    .controller('HeaderCtl', function ($scope, $http, UserAccount) {
        $scope.headerVisited = [];

        $scope.visiter = function(length, index) {
            event.preventDefault();
            event.stopPropagation();
            if (0 === $scope.headerVisited.length) {
                for (var i = 0; i < arguments[0]; i++) {
                    if (arguments[1] === i) {
                        $scope.headerVisited.push(true);
                    } else {
                        $scope.headerVisited.push(false);
                    }
                }
            } else {
                for (var j = 0; j < $scope.headerVisited.length; j++) {
                    if (j === arguments[1]) {
                        $scope.headerVisited[j] = true;
                    } else {
                        $scope.headerVisited[j] = false;
                    }
                }
            }
        };

        $scope.userAccount = UserAccount.jsonpquery();

        /*
        $scope.userAccount = {};

        //var aurl = 'http://haochiquan.com/Api/UserInfo/read/name/wfwalking/callback/JSON_CALLBACK';
        var User = $resource('http://haochiquan.com/Api/UserInfo/name/:name', {name: '@name'});
        var user = User.get({name: 'wfwalking'}, function() {
           console.log(3333333);
        });


        var aurl = 'http://haochiquan.com/Api/UserInfo/read?callback=JSON_CALLBACK';
        $http.jsonp(aurl)
            .success(function(data) {
                console.log(111);
                //$scope.userAccount = data;
                //console.log($scope.userAccount);
            })
            .error(function(data) {
                console.log(2222);
                //console.log('Error: ' + data);
            });
         */

    });
