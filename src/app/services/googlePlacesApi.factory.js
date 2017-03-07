(function() {
  'use strict';

  angular
      .module('top_alarm_companies')
      .factory('googlePlacesApi', googlePlacesApi);

  /** @ngInject */
  function googlePlacesApi($log, $window) {
    $log.log('googlePlacesApi()');
    if (!$window.google) {
      throw 'Global `google` var missing. Did you forget to include the places API script?';
    }
    return $window.google;
  }

})();
