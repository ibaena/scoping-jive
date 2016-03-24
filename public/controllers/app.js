var Portfolio = angular.module('Portfolio', [
  'ui.router',
  'mainCtrl'
]);

Portfolio.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  // HOME STATES AND NESTED VIEWS ========================================
    .state('welcome', {
      url: '/',
      templateUrl: '/views/partials/enter.html',
      controller: 'mainCtrl'
    })
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('home', {
      url: '/ivanbaena',
      templateUrl: '/views/partials/nav.html',
      controller: 'mainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/partials/about.html',
      controller: 'mainCtrl'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: '/views/partials/skills.html',
      controller: 'mainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/views/partials/contact.html',
      controller: 'mainCtrl'
    });

});
