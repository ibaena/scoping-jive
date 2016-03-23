var Portfolio = angular.module('Portfolio', [
  'ngRoute',
  'mainCtrl'
]);

Portfolio.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/views/partials/nav.html',
    controller: 'mainCtrl'
  }).
  otherwise({
    redirectTo: '/error'
  });
}]);
