var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

mainCtrl.controller('mainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.enter = function() {
    $scope.showNav = true;
    $location.path('/ivanbaena');
  };
  $scope.contactLoader = false;
  $scope.addRmContact = function() {
    console.log('hey');
    $scope.contactLoader = !$scope.contactLoader;
  };

}]);
