(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .directive('getStarted', getStarted);

  /** @ngInject */
  function getStarted($log, $state) {
    $log.log($state);
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/getStarted/getStarted.html',
      controller: GetStartedController,
      controllerAs: 'getStarted',
      bindToController: true
    };

    function GetStartedController() {
      var getStarted = this;

      getStarted.speakWithARepresentative = function() {
        $state.go('specialsAndPromotions');
      }

      getStarted.generateQuotesOnline = function() {
        $state.go('getQuote');
      }
    }

    return directive;
  }
})();
