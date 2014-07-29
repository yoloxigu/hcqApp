'use strict';
angular.module('haochiquanApp')
    .controller('SubjectCtl', function ($scope) {
        $scope.subjects = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u140.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 one',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u73.jpg'},{url:'uploads/contents/u75.jpg'},{url:'uploads/contents/u77.jpg'},{url:'uploads/contents/u79.jpg'},{url:'uploads/contents/u81.jpg'},{url:'uploads/contents/u83.jpg'}],
                playerPublishDateTime: '2014-07-10 12:10',
                playerFromGroup: '圈子名称 noe',
                playerSubjectCommentCount: '7',
                playerSubjectReplyCount: '7',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '7'
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/users/u155.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 two',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u79.jpg'},{url:'uploads/contents/u81.jpg'},{url:'uploads/contents/u83.jpg'}],
                playerPublishDateTime: '2014-07-10 11:10',
                playerFromGroup: '圈子名称 two',
                playerSubjectCommentCount: '99999',
                playerSubjectReplyCount: '99999',
                playerSubjectCollection: '0',
                playerSubjectLaudCount: '99999'
            },
            {
                playerUserName: 'UserName three',
                playerUserPhoto: 'uploads/users/u533.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 three',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u199.jpg'},{url:'uploads/contents/u277.jpg'},{url:'uploads/contents/u279.jpg'},{url:'uploads/contents/u281.jpg'}],
                playerPublishDateTime: '2014-07-10 10:10',
                playerFromGroup: '圈子名称 three',
                playerSubjectCommentCount: '99',
                playerSubjectReplyCount: '999',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '9999'
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/users/u473.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 four',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 09:10',
                playerFromGroup: '圈子名称 four',
                playerSubjectCommentCount: '11',
                playerSubjectReplyCount: '11',
                playerSubjectCollection: '0',
                playerSubjectLaudCount: '11'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectReplyCount: '22',
                playerSubjectCollection: '1',
                playerSubjectLaudCount: '22'
            }
        ];

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

        $scope.commentItems = [];
        $scope.replyItems = [];
        $scope.flag = false;

        $scope.changeSubjectPanel = function (index, length, panel) {
            if (0 === $scope.commentItems.length) {
                for (var i = 0; i < length; i++) {
                    if (i === index) {
                        if ('comment' === panel) {
                            $scope.commentItems.push(true);
                        } else {
                            $scope.replyItems.push(true);
                        }
                    } else {
                        $scope.commentItems.push(false);
                        $scope.replyItems.push(false);
                    }
                }
            } else {
                $scope.commentItems.forEach(function(value, key) {
                    if (key === index
                        && $scope.commentItems[key] === false
                        && 'comment' === panel) {
                        $scope.commentItems[key] = true;
                    } else {
                        $scope.commentItems[key] = false;
                    }
                });
                $scope.replyItems.forEach(function(value, key) {
                    if (key === index
                        && $scope.replyItems[key] === false
                        && 'reply' === panel) {
                        $scope.replyItems[key] = true;
                    } else {
                        $scope.replyItems[key] = false;
                    }
                });
            }
        }

        $scope.addSubjectPanel = function(index, length, panel) {

        };

        $scope.changeCollection = function(value) {
            if ('0' === value) {
                return '1';
            } else {
                return '0';
            }
        };

        $scope.changeLaud = function(value) {
            if ($scope.flag === false) {
                $scope.flag = true;
                return parseInt(value) + 1;
            } else {
                $scope.flag = false;
                return parseInt(value) - 1;
            }
        };
    });