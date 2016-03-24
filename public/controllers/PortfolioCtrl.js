var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

mainCtrl.controller('mainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.enter = function(){
    $scope.showNav =  true;
    $location.path('/ivanbaena');
  };
}]);
