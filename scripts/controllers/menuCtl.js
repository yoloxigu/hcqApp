'use strict';
angular.module('haochiquanApp')
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
    });