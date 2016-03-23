var Portfolio = angular.module('Portfolio', [
  'ngRoute',
  'mainCtrl'
]);

Portfolio.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/views/partials/enter.html',
    controller: 'mainCtrl'
  }).
  when('/ivanbaena',{
    templateUrl:'/views/partials/home.html',
    controller: 'mainCtrl'
  }).
  otherwise({
    redirectTo: '/error'
  });
}]);
