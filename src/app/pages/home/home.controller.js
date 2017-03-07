(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log) {
    $log.log('HomeController()');
  }

})();
