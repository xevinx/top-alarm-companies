(function() {
  'use strict';

  describe('service siteData', function() {
    var siteData;

    beforeEach(module('top_alarm_companies'));
    beforeEach(inject(function(_siteData_) {
      siteData = _siteData_;
    }));

    it('should be registered', function() {
      expect(siteData).not.toEqual(null);
    });

    describe('getContent function', function() {
      it('should exist', function() {
        expect(siteData.getContent).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = siteData.getContent();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
