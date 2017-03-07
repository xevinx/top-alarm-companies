(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($log) {
    $log.log('IndexController()');
  }

})();
