var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

mainCtrl.controller('mainCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
  $scope.preloader = true;
  $scope.enter = function() {
    $scope.showNav = true;
    $scope.preloader = false;
    $timeout(function() {
      $scope.preloader = true;
    }, 2000).then(function() {
      $location.path('/ivanbaena');

    });
  };
  $scope.aboutLoader = false;
  $scope.showAbout = function() {
    $scope.preloader = false;
    $timeout(function() {
      $scope.aboutLoader = !$scope.aboutLoader;
    }, 3000).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.removeAbout = function() {
    $scope.aboutLoader = !$scope.aboutLoader;
    $scope.preloader = false;
    $timeout(function() {}, 3000).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.contactLoader = false;
  $scope.showContact = function() {
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
  $scope.showSkills = function() {
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
