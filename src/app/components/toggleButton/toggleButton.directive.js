(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .directive('toggleButton', toggleButton);

  /** @ngInject */
  function toggleButton($log) {
    $log.log('toggleButton()');
    var directive = {
      restrict: 'ECA',
      link: toggleButtonLink
    };


    // this directive is needed because the bootstrapUI radio buttons
    // lose their active state when you first click outside of it in Chrome
    function toggleButtonLink(scope, element) {
      $log.log('toggleButtonLink()', element);
      element.bind('click', function() {
        $log.log('clicking', element);
        // check if it is currently active or not
        if (element.hasClass('active')) {
          element.removeClass('active');
        } else {
          // if it needs to active, we also need to make sure we de-activate any
          // active buttons in the button set.
          element.closest('.btn-group').find('.toggle-button').removeClass('active');
          element.addClass('active');
        }
      });
    }

    return directive;
  }
})();
