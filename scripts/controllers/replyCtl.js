'use strict';
angular.module('haochiquanApp')
    .controller('ReplyCtl', function ($scope) {
        $scope.replys = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u533.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectReply: '转发内容转发内容转发内容转发内容转发内容'

            },
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u541.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectReply: '转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容'
            },
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u543.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectReply: '转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容转发内容'
            }
        ];

        $scope.ReplyItems = [];

        $scope.subjectReply = function (index, length) {
            if (0 === $scope.ReplyItems.length) {
                for (var i = 0; i < length; i++) {
                    if (i === index) {
                        $scope.ReplyItems.push(true);
                    } else {
                        $scope.ReplyItems.push(false);
                    }
                }
            } else {
                $scope.ReplyItems.forEach(function(value, key) {
                    if (key === index && $scope.ReplyItems[key] === false) {
                        $scope.ReplyItems[key] = true;
                    } else {
                        $scope.ReplyItems[key] = false;
                    }
                });
            }
        }
    });