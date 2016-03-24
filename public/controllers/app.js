var Portfolio = angular.module('Portfolio', [
  'ui.router',
  'mainCtrl'
]);

Portfolio.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: '/views/partials/enter.html',
      controller: 'mainCtrl'
    })
    .state('home', {
      url: '/ivanbaena',
      views: {
        '': {
          templateUrl: '/views/partials/home.html'
        },
        'columnOne': {
          templateUrl: '/views/partials/nav.html'
        },
      },
      controller: 'mainCtrl'
    })
  .state('about', {
      url: '/about',
      views: {
        '': {
          templateUrl: '/views/partials/about.html'
        },
        'columnOne': {
          templateUrl: '/views/partials/nav.html'
        },
      },
      controller: 'mainCtrl'
    })
    .state('skills', {
      url: '/skills',
      views: {
        '': {
          templateUrl: '/views/partials/skills.html'
        },
        'columnOne': {
          templateUrl: '/views/partials/nav.html'
        },
      },
      controller: 'mainCtrl'
    })
    .state('contact', {
      url: '/contact',
      views: {
        '': {
          templateUrl: '/views/partials/contact.html'
        },
        'columnOne': {
          templateUrl: '/views/partials/nav.html'
        },
      },
      controller: 'mainCtrl'
    });

});
