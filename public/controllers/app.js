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
          templateUrl: '/views/partials/home.html',
          controller: 'mainCtrl'
        },
        'header': {
          templateUrl: '/views/partials/nav.html',
          controller: 'mainCtrl'
        },
        'tiles@home': {
          templateUrl: '/views/partials/tiles.html',
          controller: 'mainCtrl'
        },
        'skills@home': {
          templateUrl: '/views/partials/skills.html',
          controller: 'mainCtrl'
        },
        'contact@home': {
          templateUrl: '/views/partials/contact.html',
          controller: 'mainCtrl'
        },
        'footer': {
          templateUrl: '/views/partials/footer.html',
          controller: 'mainCtrl'
        },
      },
      controller: 'mainCtrl'
    });
});
