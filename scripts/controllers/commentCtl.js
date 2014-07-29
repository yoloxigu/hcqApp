'use strict';
angular.module('haochiquanApp')
    .controller('CommentCtl', function ($scope) {
        $scope.comments = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u533.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectComment: '评论内容评论内容评论内容评论内容评论内容'

            },
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u541.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectComment: '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容'
            },
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u543.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectComment: '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容'
            }
        ];

        $scope.commentItems = [];

        $scope.subjectComment = function (index, length) {
            if (0 === $scope.commentItems.length) {
                for (var i = 0; i < length; i++) {
                    if (i === index) {
                        $scope.commentItems.push(true);
                    } else {
                        $scope.commentItems.push(false);
                    }
                }
            } else {
                $scope.commentItems.forEach(function(value, key) {
                    if (key === index && $scope.commentItems[key] === false) {
                        $scope.commentItems[key] = true;
                    } else {
                        $scope.commentItems[key] = false;
                    }
                });
            }
        }
    });