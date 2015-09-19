angular.module('starter.services', [])

.factory('leafs', function() {
  // Some fake testing data
  var leafs = [
    {
      id: 0,
      botanical_name: 'aloe vera',
      en_names: ['aloe'],
      en_description:'',
      ml_names: ['കറ്റാർ വാഴ'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
    }, {
      id: 1,
      botanical_name: 'ocimum tenuiflorum',
      en_names: ['mint'],
      en_description:'',
      ml_names: ['തുളസി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 2,
      botanical_name: 'scoparia dulcis',
      en_names: ['green chirayta', 'creat', 'king of bitters', 'andrographis', 'india echinacea'],
      en_description:'',
      ml_names: ['കല്ലുരുക്കി', 'മീനാംഗണി', 'സന്യാസിപ്പച്ച', 'ഋഷിഭക്ഷ'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 3,
      botanical_name: 'terminalia chebula',
      en_names: ['chebulic myrobalan'],
      en_description:'',
      ml_names: ['കടുക്ക'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 4,
      botanical_name: 'hyllanthus emblica',
      en_names: ['emblic'],
      en_description:'',
      ml_names: ['നെല്ലിക്ക'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 5,
      botanical_name: 'tinospora cordifolia',
      en_names: ['Guduchi', 'Giloy'],
      en_description:'',
      ml_names: ['ചിറ്റാമൃത്'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 6,
      botanical_name: 'oxalis corniculata',
      en_names: ['creeping woodsorrel', 'procumbent yellow-sorrel', 'sleeping beauty'],
      en_description:'',
      ml_names: ['പുളിയാറില'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']
    }, {
      id: 7,
      botanical_name: 'leucas aspera',
      en_names: ['leucas'],
      en_description:'',
      ml_names: ['തുമ്പ'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 8,
      botanical_name: 'boerhavia diffusa',
      en_names: ['hogweed', 'pigweed', 'tarvine'],
      en_description:'',
      ml_names: ['തഴുതാമ'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 9,
      botanical_name: 'cyclea peltata',
      en_names: ['pata root'],
      en_description:'',
      ml_names: ['പാടവള്ളി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 10,
      botanical_name: 'mimosa pudica',
      en_names: ['sensitive plant', 'sleepy plant', 'shy plant'],
      en_description:'',
      ml_names: ['തൊട്ടാവാടി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 11,
      botanical_name: 'ocimum americanum',
      en_names: ['hoary basil'],
      en_description:'',
      ml_names: ['കാട്ടു തുളസി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 12,
      botanical_name: 'coffea arabica',
      en_names: ['coffee tree'],
      en_description:'',
      ml_names: ['കാപ്പി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 13,
      botanical_name: 'murraya koenigii',
      en_names: ['curry leaf'],
      en_description:'',
      ml_names: ['കറിവേപ്പ്'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 14,
      botanical_name: 'cassia fistula',
      en_names: ['purging fistula'],
      en_description:'',
      ml_names: ['കണിക്കൊന്ന'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 15,
      botanical_name: 'acorus calamus',
      en_names: ['sweet flag', 'beewort', 'bitter pepper root', 'calamus root', 'flag root', 'gladdon', 'myrtle flag', 'myrtle grass', 'myrtle root', 'myrtle sedge', 'pine root', 'rat root', 'sea sedge', 'sweet cane', 'sweet cinnamon', 'sweet grass', 'sweet myrtle', 'sweet root', 'sweet rush', 'sweet sedge'],
      en_description:'',
      ml_names: ['വയന്പ്'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 16,
      botanical_name: 'tragia involucrata',
      en_names: ['stinging nettle', 'indian stinging nettle', 'climbing nettle', 'canchorie root-plant'],
      en_description:'',
      ml_names: ['കൊടിത്തൂവ', 'കൊടുത്ത', 'ചൊറിയണം', 'കൊടിത്തുന്പ'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 17,
      botanical_name: 'andrographis paniculata',
      en_names: ['green chirayta', 'creat', 'king of bitters', 'andrographis', 'india echinacea'],
      en_description:'',
      ml_names: ['കിരിയാത്ത്', 'നിലവേപ്പ്'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg']    
    }, {
      id: 18,
      botanical_name: 'desmodium triflorum',
      en_names: [''],
      en_description:'',
      ml_names: ['നിലന്പരണ്ട', 'അസ്ഥിസംഹാരി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg']    
    }
  ];


  return {
    all: function() {
      return leafs;
    },
    remove: function(leaf) {
      // console.log(leaf);
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
})

.factory('myfavs', function() {
  var myfavs;
  if (localStorage.getItem("savedFav") === null) {
    var emptyFav = [];
    localStorage.setItem("savedFav", JSON.stringify(emptyFav));
    myfavs = JSON.parse(localStorage.getItem("savedFav"));
  }else{
    var retrievedData = localStorage.getItem("savedFav");
    myfavs = JSON.parse(retrievedData);
  }


  return {
    all: function() {
      return myfavs;
    },
    remove: function(myfav) {
      myfavs.splice(myfavs.indexOf(myfav), 1);
      localStorage.setItem("savedFav", JSON.stringify(myfavs));
    },
    add: function(newFav) {
      myfavs.push(newFav);
      localStorage.setItem("savedFav", JSON.stringify(myfavs));
    },
    get: function(leafId) {
      for (var i = 0; i < myfavs.length; i++) {
        if (myfavs[i].id === parseInt(leafId)) {
          return myfavs[i];
        }
      }
      return null;
    }
  };
});

