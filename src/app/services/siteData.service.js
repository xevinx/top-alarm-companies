(function() {
  'use strict';

  angular
      .module('top_alarm_companies')
      .service('siteData', siteData);

  /** @ngInject */
  function siteData() {
    var content = {
      'title': 'Top Alarm Companies: Home Security Systems | ',
      'header': {
        'title': 'top alarm',
        'navigation': [
          {
            'id': 'security-systems',
            'image': null,
            'title': 'Security Systems',
            'url': null
          },
          {
            'id': 'home-automation',
            'image': null,
            'title': 'Home Automation',
            'url': null
          },
          {
            'id': 'energy-management',
            'image': null,
            'title': 'Energy Management',
            'url': null
          }
        ]
      },
      'navigation': [
        {
          'id': 'home',
          'title': 'Home',
          'url': '/'
        },
        {
          'id': 'getQuote',
          'title': 'Get A Quote',
          'url': '/quote'
        },
        {
          'id': 'thankYou',
          'title': 'Thank You',
          'url': '/quote/thankyou'
        },
        {
          'id': 'specialsAndPromotions',
          'title': 'Call for Specials and Promotions',
          'url': '/specials'
        }

      ],
      'pages': [
        {
          'id': 'home',
          'title': 'Home',
          'url': '/'
        },
        {
          'id': 'getQuote',
          'title': 'Get 3 Free Quotes',
          'url': '/quote'
        },
        {
          'id': 'thankYou',
          'title': 'Thank You',
          'url': '/quote/thankyou'
        },
        {
          'id': 'specialsAndPromotions',
          'title': 'Call for Specials and Promotions',
          'url': '/specials'
        }
      ],
      'partners': [
        {
          'image': {
            'height': 100,
            'position': {
              'x': 0,
              'y': 0
            },
            'src': 'company_logo.png',
            'title': null,
            'width': 150
          },
          'title': 'Security Setworks',
          'url': null
        },
        {
          'image': {
            'height': 100,
            'position': {
              'x': -170,
              'y': 5
            },
            'src': 'company_logo.png',
            'title': null,
            'width': 130
          },
          'title': 'ADT',
          'url': null
        },
        {
          'image': {
            'height': 100,
            'position': {
              'x': -320,
              'y': 0
            },
            'src': 'company_logo.png',
            'width': 130
          },
          'title': 'Protection 1 Security Solutions',
          'url': null
        },
        {
          'image': {
            'height': 100,
            'position': {
              'x': -450,
              'y': 0
            },
            'src': 'company_logo.png',
            'width': 140
          },
          'title': 'vivint',
          'url': null
        },
        {
          'image': {
            'height': 100,
            'position': {
              'x': -595,
              'y': 0
            },
            'src': 'company_logo.png',
            'width': 150
          },
          'title': 'Protect America',
          'url': null
        },
        {
          'image': {
            'height': 100,
            'position': {
              'x': -750,
              'y': 0
            },
            'src': 'company_logo.png',
            'width': 160
          },
          'title': 'Monitronics Authorized Dealer',
          'url': null
        }
      ]
    };

    this.getContent = getContent;

    function getContent() {
      return content;
    }
  }

})();
