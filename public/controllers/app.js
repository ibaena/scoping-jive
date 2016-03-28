var Portfolio = angular.module('Portfolio', [
  'ui.router',
  'mainCtrl'
]);

Portfolio.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('welcome', {
      url: '/',
      views: {
        '': {
          templateUrl: '/views/partials/enter.html',
          controller: 'mainCtrl'
        },
        'preloader@welcome': {
          templateUrl: '/views/partials/preloader.html',
          controller: 'mainCtrl'
        }
      },

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
        'about@home': {
          templateUrl: '/views/partials/about.html',
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
        'footer@home': {
          templateUrl: '/views/partials/footer.html',
          controller: 'mainCtrl'
        },
        'preloader@home': {
          templateUrl: '/views/partials/preloader.html',
          controller: 'mainCtrl'
        }
      },
      controller: 'mainCtrl'
    });
});
