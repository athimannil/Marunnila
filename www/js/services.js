angular.module('starter.services', [])

.factory('leafs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var leafs = [
    {
      id: 0,
      name: 'aloe',
      description: 'You on your way?',
      other_names: ['കറ്റാര്‍ വാഴ'],
      face: 'img/aloe/01.jpg',
      slides: ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
    }, {
      id: 1,
      name: 'mint',
      description: 'You on your way?',
      other_names: ['തുളസി'],
      face: 'img/mint/01.jpg',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 2,
      name: 'scoparia dulcis',
      description: 'You on your way?',
      other_names: ['കല്ലുരുക്കി'],
      face: 'img/scoparia dulcis/01.jpg',
      slides: ['01.jpg', '02.jpg', '03.jpg']
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