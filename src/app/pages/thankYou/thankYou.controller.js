(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .controller('ThankYouController', ThankYouController);

  /** @ngInject */
  function ThankYouController($log) {
    $log.log('ThankYouController()');
  }

})();
