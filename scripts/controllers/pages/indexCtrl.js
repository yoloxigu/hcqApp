'use strict';
angular.module('haochiquanApp')
    .controller('TemplateCtl', function ($scope) {
        $scope.template = {
            header: 'views/templates/global/header.html',
            footer: 'views/templates/global/footer.html',
            ad: 'views/templates/index/recommend_restanrant.html',
            publish: 'views/templates/index/publish.html',
            publish_subject_dialog: 'views/templates/global/publish_subject_dialog.html',
            content: 'views/templates/index/content_fall.html',
            userinfo: 'views/templates/side/userinfo.html',
            usergroup: 'views/templates/side/usergroup.html'
        };
    })
    .controller('PanelsCtl', function ($scope) {
        $scope.publishDialog = false;

        $scope.showPublishDialog = function(state) {
            if ('open' === state) {
                $scope.publishDialog = true;
            } else {
                $scope.publishDialog = false;
            }
        };
    })
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
    })
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
    })
    .controller('PublishCtl', function ($scope) {
        $scope.clicked = false;
        $scope.faceClicked = false;

        $scope.hadClick = function() {
            $scope.clicked = true;
        };

        $scope.openDialog = function($dialog) {

            if ($dialog == 'faceDialog') {
                //$scope.faceClicked = true;
                $('#contentDrop').attr({
                    style: 'visibility: visible;top: 430px;left: 120px;'
                });
            }
        };
    })
    .controller('SubjectCtl', ['$scope', 'Subject', '$resource' ,function ($scope, Subject, $resource) {

        //$scope.subjects = Subject.jsonpquery();

        var ajax = $resource('http://haochiquan.com/Api/Subject/read/account_id/4', {}, {
            jsonpQuery: {
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }});
        $scope.subjects = ajax.jsonpQuery();

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
        $scope.flags = [];

        $scope.changeSubjectPanel = function (index, length, panel) {
            if (0 === $scope.commentItems.length) {
                for (var i = 0; i < length; i++) {
                    if (i === index) {
                        if ('comment' === panel) {
                            $scope.commentItems.push(true);
                        } else {
                            $scope.commentItems.push(false);
                        }
                        if ('reply' === panel) {
                            $scope.replyItems.push(true);
                        } else {
                            $scope.replyItems.push(false);
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

        $scope.changeLaud = function(index, length, val) {
            if (0 === $scope.flags.length) {
                for (var i = 0; i < length; i++) {
                    $scope.flags.push(false);
                }
            }

            if ($scope.flags[index] === false) {
                $scope.flags[index] = true;
                return parseInt(val) + 1;
            } else {
                $scope.flags[index] = false;
                return parseInt(val) - 1;
            }
        };


    }])
    .controller('PartyCtl', function ($scope) {
        $scope.Parties = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 one',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                playerPartyCommentCount: '7',
                playerPartyRelayCount: '7',
                playerPartyCollectionCount: '7',
                playerPartyLaudCount: '7',
                playerPartyIsOpen: true,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: true
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 two',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                playerPartyCommentCount: '8',
                playerPartyRelayCount: '8',
                playerPartyCollectionCount: '8',
                playerPartyLaudCount: '8',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false

            },
            {
                playerUserName: 'UserName three',
                playerUserGender: 'Male',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 three',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 10:10',
                playerPartyCommentCount: '9',
                playerPartyRelayCount: '9',
                playerPartyCollectionCount: '9',
                playerPartyLaudCount: '9',
                playerPartyIsOpen: true,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 four',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 09:10',
                playerPartyCommentCount: '11',
                playerPartyRelayCount: '11',
                playerPartyCollectionCount: '11',
                playerPartyLaudCount: '11',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 five',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 08:10',
                playerPartyCommentCount: '22',
                playerPartyRelayCount: '22',
                playerPartyCollectionCount: '22',
                playerPartyLaudCount: '22',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: true
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 four',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 09:10',
                playerPartyCommentCount: '11',
                playerPartyRelayCount: '11',
                playerPartyCollectionCount: '11',
                playerPartyLaudCount: '11',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 five',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 08:10',
                playerPartyCommentCount: '22',
                playerPartyRelayCount: '22',
                playerPartyCollectionCount: '22',
                playerPartyLaudCount: '22',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: true
            }
        ];

    })
    .controller('MenuCtl', function ($scope) {
        $scope.Menus = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 one',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 11:10',
                playerMenuCommentCount: '7',
                playerMenuRelayCount: '7',
                playerMenuCollectionCount: '7',
                playerMenuLaudCount: '7'
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 two',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 11:10',
                playerMenuCommentCount: '8',
                playerMenuRelayCount: '8',
                playerMenuCollectionCount: '8',
                playerMenuLaudCount: '8'
            },
            {
                playerUserName: 'UserName three',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 three',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 10:10',
                playerMenuCommentCount: '9',
                playerMenuRelayCount: '9',
                playerMenuCollectionCount: '9',
                playerMenuLaudCount: '9'
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 four',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 09:10',
                playerMenuCommentCount: '11',
                playerMenuRelayCount: '11',
                playerMenuCollectionCount: '11',
                playerMenuLaudCount: '11'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 five',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 08:10',
                playerMenuCommentCount: '22',
                playerMenuRelayCount: '22',
                playerMenuCollectionCount: '22',
                playerMenuLaudCount: '22'
            },
            {
                playerUserName: 'UserName three',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 three',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 10:10',
                playerMenuCommentCount: '9',
                playerMenuRelayCount: '9',
                playerMenuCollectionCount: '9',
                playerMenuLaudCount: '9'
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 four',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 09:10',
                playerMenuCommentCount: '11',
                playerMenuRelayCount: '11',
                playerMenuCollectionCount: '11',
                playerMenuLaudCount: '11'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerMenuTitle: '菜谱名称 five',
                playerMenuFunction: ['美容', '养颜'],
                playerMenuHelfth: ['维生素', '蛋白质'],
                playerMenuContent: '菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文菜谱内容正文',
                playerMenuPhoto: {url:'uploads/player-content-photo.png'},
                playerPublishDateTime: '2014-07-10 08:10',
                playerMenuCommentCount: '22',
                playerMenuRelayCount: '22',
                playerMenuCollectionCount: '22',
                playerMenuLaudCount: '22'
            }
        ];
    })
    .controller('DiscountCtl', function ($scope) {
        $scope.Groups = [
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '代金券100',
                playerGroupEventJoinCount: '222'

            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '折扣券8.8折',
                playerGroupEventJoinCount: '222'

            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '试吃券',
                playerGroupEventJoinCount: '222'
            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '赠送券'
            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '抽奖券',
                playerGroupEventJoinCount: '222'
            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '抽奖券',
                playerGroupEventJoinCount: '222'
            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '抽奖券',
                playerGroupEventJoinCount: '222'
            },
            {
                playerGroupName: '圈子名称 noe',
                playerGroupPhoto: 'uploads/player-photo.png',
                playerGroupIcon: 'uploads/small-icon.png',
                playerGroupRestaurantPhoto: 'uploads/player-content-photo.png',
                playerGroupRestaurantName: '餐厅名称 one',
                playerGroupEventName: '国庆优惠活动',
                playerGroupDiscountType: '代金券',
                playerGroupEventDateStart: '2014-02-10',
                playerGroupEventDateEnd: '2014-02-15',
                playerGroupEventDetail: '优惠活动说明优惠活动说明优惠活动说明优惠活动说明优惠活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                PlayerFromGroupMemberName: 'User Name one',
                playerGroupEventCommentCount: '7',
                playerGroupEventRelayCount: '7',
                playerGroupEventLaudCount: '7',
                playerGroupEventDiscount: '抽奖券',
                playerGroupEventJoinCount: '222'
            }
        ];
    });