(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .controller('GetQuoteController', GetQuoteController);

  /** @ngInject */
  function GetQuoteController($http, $log, $state) {
    var getQuote = this;
    // dummy host, eventually will be a webservice
    var host = '/services/api';
    getQuote.user = {};

    getQuote.quote = function() {

      // call the imaginary getQuote method of our dummy webservice
      // pass it the user's input from the form

      $http({
        url: host + '/getQuote',
        data: getQuote.user,
        method: 'post'
      })
        .then(getQuoteComplete)
        .catch(getQuoteFailed);

      function getQuoteComplete(response) {
        $state.go('thankYou');
        return response.data;
      }

      function getQuoteFailed(error) {
        $state.go('thankYou');
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }

    }

    $log.log('GetQuoteController()');
  }

})();

// google place API key
// AIzaSyCqdrL2dRTl4k3G7oG1PT1kEyxDigFh9YU