angular.module('starter.services', [])

.factory('leafs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var leafs = [
    {
      id: 0,
      botanical_name: 'aloe vera',
      en_names: ['aloe'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dignissimos eligendi vero quibusdam, nam repellat ut harum molestiae iste voluptate nisi itaque accusantium veritatis placeat cumque! Saepe distinctio natus, accusantium.',
      ml_names: ['കറ്റാര്‍ വാഴ'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dignissimos eligendi vero quibusdam, nam repellat ut harum molestiae iste voluptate nisi itaque accusantium veritatis placeat cumque! Saepe distinctio natus, accusantium.',
      slides: ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
    }, {
      id: 1,
      botanical_name: 'ocimum tenuiflorum',
      en_names: ['mint'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae doloremque expedita sapiente enim quam ducimus dolorum sint, perferendis eaque pariatur eveniet aperiam, rem a, labore ab est reiciendis architecto error.',
      ml_names: ['തുളസി'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae doloremque expedita sapiente enim quam ducimus dolorum sint, perferendis eaque pariatur eveniet aperiam, rem a, labore ab est reiciendis architecto error.',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 2,
      botanical_name: 'scoparia dulcis',
      en_names: ['green chirayta', 'creat', 'king of bitters', 'andrographis', 'india echinacea'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eos expedita officiis earum dolore hic modi, porro non excepturi debitis quis illum aperiam eum facilis aspernatur, eaque, reiciendis, tempore iure.',
      ml_names: ['കല്ലുരുക്കി', 'മീനാംഗണി', 'സന്യാസിപ്പച്ച', 'ഋഷിഭക്ഷ'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eos expedita officiis earum dolore hic modi, porro non excepturi debitis quis illum aperiam eum facilis aspernatur, eaque, reiciendis, tempore iure.',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 3,
      botanical_name: 'terminalia chebula',
      en_names: ['chebulic myrobalan'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കടുക്ക'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 4,
      botanical_name: 'hyllanthus emblica',
      en_names: ['emblic'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['നെല്ലിക്ക'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 5,
      botanical_name: 'tinospora cordifolia',
      en_names: ['Guduchi', 'Giloy'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['ചിറ്റാമൃത്'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 6,
      botanical_name: 'oxalis corniculata',
      en_names: ['creeping woodsorrel', 'procumbent yellow-sorrel', 'sleeping beauty'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['പുളിയാറില'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']
    }, {
      id: 7,
      botanical_name: 'leucas aspera',
      en_names: ['leucas'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['തുമ്പ'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 8,
      botanical_name: 'boerhavia diffusa',
      en_names: ['hogweed', 'pigweed', 'tarvine'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['തഴുതാമ'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 9,
      botanical_name: 'cyclea peltata',
      en_names: ['pata root'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['പാടവള്ളി'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 10,
      botanical_name: 'mimosa pudica',
      en_names: ['sensitive plant', 'sleepy plant', 'shy plant'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['തൊട്ടാവാടി'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 11,
      botanical_name: 'ocimum americanum',
      en_names: ['hoary basil'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കാട്ടു തുളസി'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 12,
      botanical_name: 'coffea arabica',
      en_names: ['coffee tree'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കാപ്പി'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 13,
      botanical_name: 'murraya koenigii',
      en_names: ['curry leaf'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കറിവേപ്പ്'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 14,
      botanical_name: 'cassia fistula',
      en_names: ['purging fistula'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കണിക്കൊന്ന'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 15,
      botanical_name: 'acorus calamus',
      en_names: ['sweet flag', 'beewort', 'bitter pepper root', 'calamus root', 'flag root', 'gladdon', 'myrtle flag', 'myrtle grass', 'myrtle root', 'myrtle sedge', 'pine root', 'rat root', 'sea sedge', 'sweet cane', 'sweet cinnamon', 'sweet grass', 'sweet myrtle', 'sweet root', 'sweet rush', 'sweet sedge'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['വയന്പ്'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 16,
      botanical_name: 'tragia involucrata',
      en_names: ['stinging nettle', 'indian stinging nettle', 'climbing nettle', 'canchorie root-plant'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കൊടിത്തൂവ', 'കൊടുത്ത', 'ചൊറിയണം', 'കൊടിത്തുന്പ'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg']
    }, {
      id: 17,
      botanical_name: 'andrographis paniculata',
      en_names: ['green chirayta', 'creat', 'king of bitters', 'andrographis', 'india echinacea'],
      en_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      ml_names: ['കിരിയാത്ത്', 'നിലവേപ്പ്'],
      ml_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus maiores quod recusandae laborum odit cum, dignissimos possimus aliquid id veniam tempore autem dolores ullam voluptas! Saepe aut iure pariatur!',
      slides: ['01.jpg', '02.jpg']
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