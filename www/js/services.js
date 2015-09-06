angular.module('starter.services', [])

.factory('leafs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var leafs = [
    {
      id: 0,
      name: 'Aloe',
      description: 'You on your way?',
      other_names: ['കറ്റാര്‍ വാഴ'],
      face: 'img/aloe/01.jpg',
      slides: ['01', '02', '03', '04']
    }, {
      id: 0,
      name: 'തുളസി',
      description: 'You on your way?',
      other_names: ['other name 01', 'other name 02', 'other name 03', 'other name 04', 'other name 05', 'other name 06'],
      face: 'img/mint/01.jpg',
      slides: ['01', '02', '03', '04']
    }, {
      id: 0,
      name: 'തുളസി',
      en_name:'mint',
      description: 'You on your way?',
      other_names: ['other name 01', 'other name 02', 'other name 03', 'other name 04', 'other name 05', 'other name 06'],
      face: 'img/mint/01.jpg',
      slides: ['01', '02', '03', '04']
    }, {
      id: 0,
      name: 'തുളസി',
      description: 'You on your way?',
      other_names: ['other name 01', 'other name 02', 'other name 03', 'other name 04', 'other name 05', 'other name 06'],
      face: 'img/mint/01.jpg',
      slides: ['01', '02', '03', '04']
    }, {
      id: 0,
      name: 'തുളസി',
      description: 'You on your way?',
      other_names: ['other name 01', 'other name 02', 'other name 03', 'other name 04', 'other name 05', 'other name 06'],
      face: 'img/mint/01.jpg',
      slides: ['01', '02', '03', '04']
    }, {
      id: 0,
      name: 'kooy',
      description: 'You on your way?',
      other_names: ['other name 01', 'other name 02', 'other name 03', 'other name 04', 'other name 05', 'other name 06'],
      face: 'img/mint/01.jpg',
      slides: ['01', '02', '03', '04']
    }
  ];


  return {
    all: function() {
      return leafs;
    },
    remove: function(leaf) {
      leafs.splice(leafs.indexOf(leaf), 1);
    },
    get: function(leafId) {
      for (var i = 0; i < leafs.length; i++) {
        if (leafs[i].id === parseInt(leafId)) {
          return leafs[i];
        }
      }
      return null;
    }
  };
});