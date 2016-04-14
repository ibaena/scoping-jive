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
    }, 2500).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.removeAbout = function() {
    $scope.aboutLoader = !$scope.aboutLoader;
    $scope.preloader = false;
    $timeout(function() {}, 2500).then(function() {
      $scope.preloader = true;
    });
  };

  $scope.contactLoader = false;
  $scope.showContact = function() {
    $scope.preloader = false;
    $timeout(function() {
      $scope.contactLoader = !$scope.contactLoader;
    }, 2500).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.removeContact = function() {
    $scope.contactLoader = !$scope.contactLoader;
    $scope.preloader = false;
    $timeout(function() {}, 2500).then(function() {
      $scope.preloader = true;
    });
  };

  $scope.projectLoader = false;
  $scope.showProject = function() {
    $scope.preloader = false;
    $timeout(function() {
      $scope.projectLoader = !$scope.projectLoader;
    }, 2500).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.removeproject = function() {
    $scope.projectLoader = !$scope.projectLoader;
    $scope.preloader = false;
    $timeout(function() {}, 2500).then(function() {
      $scope.preloader = true;
    });
  };

  $scope.skillsLoader = false;
  $scope.showSkills = function() {
    $scope.preloader = false;
    $timeout(function() {
      $scope.skillsLoader = !$scope.skillsLoader;
    }, 2500).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.split = false;
  $scope.removeSkills = function() {
    $scope.skillsLoader = !$scope.skillsLoader;
    $scope.preloader = false;
    $timeout(function() {}, 2500).then(function() {
      $scope.preloader = true;
    });
  };
  $scope.skillCodeChanger = function() {
    $scope.split = !$scope.split;
  };
}]);
