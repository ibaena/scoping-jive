var mainCtrl = angular.module('mainCtrl', []);

mainCtrl.controller('mainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.enter = function(){
    $location.path('/ivanbaena');
  };
}]);
