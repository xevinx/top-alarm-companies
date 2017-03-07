(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .directive('features', featuresDisplay);

  /** @ngInject */
  function featuresDisplay($log) {
    $log.log('featureDisplay()');
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/features/features.html'
    };
    return directive;
  }

})();
