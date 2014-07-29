angular.module('haochiquanApp')
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
    });