var mainCtrl = angular.module('mainCtrl', []);

mainCtrl.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/items').success(function(data) {
    $scope.items = data;
  });
}]);
