(function() {
  'use strict';

  angular
    .module('top_alarm_companies')
    .directive('partners', partnersDisplay);

  /** @ngInject */
  function partnersDisplay($log, $timeout, $window) {
    $log.log('partnersDisplay()');
    var directive = {
      link: partnersLink,
      restrict: 'E',
      templateUrl: 'app/components/partners/partners.html'
    };

    function partnersLink() {
      $log.log('partnersDisplay().partnersLink()');
      var thumbnailHolder;

      // Whenever the window resizes, we may shift the display, so recalculate the width of the thumbnail holder and position it center
      angular.element($window).bind('resize', setThumbnailsWidth);

      // use $timeout to make sure the DOM has rendered before trying to get the width
      $timeout(setThumbnailsWidth);

      // The reason we are dynamically hard coding the width of the thumbnails is so we can reuse
      // this code with different sites that have unknown quantities.
      function setThumbnailsWidth() {
        $log.log('partnersDisplay().partnersLink().setThumbnailsWidth()');
        // if the thumbnail holder has already been defined, keep using it, otherwise get it from the DOM
        thumbnailHolder = angular.element(".thumbnails .holder");
        // add the absolute class, which will move it left, but will set its width to its true width
        thumbnailHolder.addClass('absolute').width('auto');
        // get the thumbnail's true width
        var currentWidth = thumbnailHolder.width();
        // hard code the width of the thumbnail holder
        thumbnailHolder.width(currentWidth);
        // now that we have a hard width set, remove the absolute class so that it no longer is at the left
        thumbnailHolder.removeClass('absolute');
      }

    }

    return directive;

  }
})();
