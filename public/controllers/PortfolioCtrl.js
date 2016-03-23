var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

mainCtrl.controller('mainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.boxClass = true;
  $scope.enter = function(){
    $location.path('/ivanbaena');
  };
}]);
