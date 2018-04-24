(function () {
'use strict';
angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.Check = function () {
        if (!$scope.menu) {
            $scope.result = "Please enter data first";
            $scope.myColor = {color:'red'};
        }
        else {
            var res = $scope.menu.split(',');
            var count = 0
            var i;
            for (i = 0; i < res.length; i++) {
                if (res[i].trim()) {
                    count++;
                }
            }
            console.log(count)
            if (count <= 3) {
                $scope.result = "Enjoy!";
                $scope.myColor = {color:'green'};
            }
            else {
                $scope.result = "Too much!";
                $scope.myColor = {color:'green'};
            }
        }
    }
}

})();