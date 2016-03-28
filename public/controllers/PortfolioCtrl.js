var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

mainCtrl.controller('mainCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
  $scope.enter = function() {
    $scope.showNav = true;
    $location.path('/ivanbaena');
  };
  $scope.preloader = true;
  $scope.contactLoader = false;
  $scope.addRmContact = function() {
    $scope.preloader = false;
    $timeout(function() {
      $scope.contactLoader = !$scope.contactLoader;
    }, 3000).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.removeContact = function() {
    $scope.contactLoader = !$scope.contactLoader;
    $scope.preloader = false;
    $timeout(function() {}, 3000).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.skillsLoader = false;
  $scope.addRmSkills = function() {
    $scope.preloader = false;
    $timeout(function() {
      $scope.skillsLoader = !$scope.skillsLoader;
    }, 3000).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.removeSkills = function() {
    $scope.skillsLoader = !$scope.skillsLoader;
    $scope.preloader = false;
    $timeout(function() {}, 3000).then(function() {
      $scope.preloader = true;
    });
  };
}]);
