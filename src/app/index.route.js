(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, siteDataProvider) {
    var siteData = siteDataProvider.$get().getContent();
    angular.forEach(siteData.pages, function(page) {
      $stateProvider.state(page.id, {
          url: page.url,
          templateUrl: 'app/pages/' + page.id+'/'+page.id+'.html',
          controller: page.id.capitalizeFirstLetter() + 'Controller',
          controllerAs: page.id
      });
    });
    $urlRouterProvider.otherwise('/');
  }

})();