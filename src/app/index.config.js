(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
