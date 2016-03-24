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
        'portfolio@home': {
          templateUrl: '/views/partials/tiles.html'
        },
        'footer@home': {
          templateUrl: '/views/partials/footer.html'
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
        'footer@skills': {
          templateUrl: '/views/partials/footer.html'
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
        'footer@contact': {
          templateUrl: '/views/partials/footer.html'
        },
      },
      controller: 'mainCtrl'
    });

});
