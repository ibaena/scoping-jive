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
  when('/about',{
    templateUrl:'/views/partials/about.html',
    controller: 'mainCtrl'
  }).
  when('/skills',{
    templateUrl:'/views/partials/skills.html',
    controller: 'mainCtrl'
  }).
  when('/contact',{
    templateUrl:'/views/partials/contact.html',
    controller: 'mainCtrl'
  }).
  otherwise({
    redirectTo: '/error'
  });
}]);
