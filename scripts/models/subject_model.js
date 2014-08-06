'use strict';
angular.module('haochiquanApp')
    .factory('Subject', function($resource) {
        return $resource('http://haochiquan.com/Api/Subject/read/account_id/4', {}, {
            jsonpquery: {
                method: 'JSONP',
                params: {callback: 'JSON_CALLBACK'},
                isArray: true
            }
        });
    });