var sectionCtrl = angular.module('sectionCtrl', ['ngAnimate']);

sectionCtrl.controller('skillsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('public/js/skills.json').then(function(data) {
    $scope.skills = data.data;
  });
  $scope.showLanguage = function(name) {
    $scope.query = name;
  };
}]);
sectionCtrl.controller('aboutCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('public/js/about.json').then(function(data) {
    $scope.about = data.data;
  });
}]);
sectionCtrl.controller('projectCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('public/js/projects.json').then(function(data) {
    $scope.projects = data.data;
  });
}]);
