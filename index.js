(function () {
  'use strict';

  function funcAppRouters($stateProvider, $urlRouterProvider) {
    var router,
      routers = {
        'home': {
          url: '',
          templateUrl: 'views/home.html',
          title: 'Stuff You Should Know As a Web Developer'
        },
        'practices.introduction': {
          url: '/introduction',
          templateUrl: 'views/practices/introduction.html',
          title: '公司简介'
        }
      };

    for (router in routers) {
      $stateProvider.state(router, {
        url: routers[router].url,
        templateUrl: routers[router].templateUrl,
        title: routers[router].title
      });
    }

    $urlRouterProvider.otherwise('');
  }


  function funcInitRun($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      $rootScope.strHTMLTitle = toState.title;
    });
  }

  angular.module('websites', ['ngMaterial', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', funcAppRouters])
    .run(['$rootScope', '$state', funcInitRun]);

}());
