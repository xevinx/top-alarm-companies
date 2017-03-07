(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, siteData) {
    // JSON content
    $rootScope.siteData = siteData.getContent();
    $log.debug('runBlock end');
  }

})();
