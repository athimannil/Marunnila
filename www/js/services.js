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
      en_names: [],
      en_description:'',
      ml_names: ['നിലന്പരണ്ട', 'അസ്ഥിസംഹാരി'],
      ml_description: '',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 19,
      botanical_name: 'centella Asiatica',
      en_names: ['Centella Asiatica'],
      en_description: '',
      ml_names: ['മുത്തിള്‍', 'കുടങ്ങല്‍', 'കൊടുങ്ങല്‍', 'കുടകന്‍', 'സ്ഥലബ്രഹ്മി'],
      ml_description: 'മണ്ഡൂകപർണ്ണി എന്ന് സംസ്കൃതത്തിൽ അറിയപ്പെടുന്ന ഈ സസ്യം ചതുപ്പുപ്രദേശങ്ങളിലോ നല്ല ജലാംശം ലഭിക്കുന്ന പ്രദേശങ്ങളിലോ‍ വളരുന്നു. നിലത്ത് പറ്റി വളരുന്ന ഇതിന്റെ ഇലക്ക് തലച്ചോറിന്റെ ആകൃതിയാണുള്ളത്. തണ്ട്, ഇല, വേര്‌ എന്നിവയാണ്‌ ഔഷധത്തിന്‌ ഉപയോഗിക്കുന്നത്.',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 20,
      botanical_name: 'acaypha Indica',
      en_names: ['acaypha Indica'],
      en_description: '',
      ml_names: ['കുപ്പമേനി', 'പൂച്ചമയക്കി'],
      ml_description: 'അരിഷ്ടമഞ്ജരി, ഹരിതമഞ്ജരി എന്നീ സംസ്കൃതനാമത്തില്‍ അറിയപ്പെടുന്ന ഈ സസ്യം ഇന്ത്യയിൽ എല്ലായിടത്തും കാണപ്പെടുന്ന ഒരു ഏകവാർഷിക ഔഷധസസ്യമാണ്. സമതലപ്രദേശങ്ങളിൽ കൂടുതലായി കാണപ്പെടുന്ന ഇതിന് ഏകദേശം ഒരു മീറ്റർ വരെ പൊക്കമുണ്ടാകും. ധാരാളം ഇലകൾ കാണപ്പെടുന്ന ഈ ചെടി ശാഖോപശാഖകളായി വളരുന്നു. ദീർഘവൃത്താകാരത്തിലോ വൃത്താകാരത്തിലോ കാണപ്പെടുന്ന ഇതിന്റെ ഇലകളുടെ പുറം ഭാഗം മിനുസമാർന്നതാണ്. പൂക്കൾ പച്ചനിറത്തിലുള്ളവയും കായ്കൾ വെള്ളനിറത്തിലുള്ളവയുമാണ്. കായ്കളിൽ അനേകം ചെറിയ വിത്തുകൾ അടങ്ങിയിരിക്കുന്നു.',
      slides: ['01.jpg', '02.jpg', '03.jpg']
    }, {
      id: 21,
      botanical_name: 'biophytum reinwardtii',
      en_names: ['biophytum reinwardtii'],
      en_description: '',
      ml_names: ['മുക്കുറ്റി', 'നിലംതെങ്ങ് ','തീണ്ടാനാഴി'],
      ml_description: 'ക്രിതാഞ്ജലി, പീതപുഷ്പം എന്നീ സംസ്കൃതനാമത്തില്‍ അറിയപ്പെടുന്ന തെങ്ങിന്റെ വളരെ ചെറിയ പതിപ്പ് പോലെ തോന്നിക്കുന്ന ഈ സസ്യം ജലം കെട്ടിനിൽക്കാത്ത തണൽ‌പ്രദേശങ്ങളിൽ വളരുന്നു. ഒരു കൊല്ലമാണ് മുക്കുറ്റിയുടെ ആയുസ്സ്. 8 മുതൽ 15 സെ.മീ. വരെ സാധാരണ ഉയരമുള്ള ഇവയ്ക്ക്  മഞ്ഞ നിറത്തിലുള്ള പൂക്കളും ഇലകളുടെ മുകൾ ഭാഗം കടും പച്ചയും അടിഭാഗം വിളറിയ പച്ചനിറവുമാണ്. തൊട്ടാവാടിയുടെ അത്ര വേഗത്തിലില്ലങ്കിലും തൊടുമ്പോൾ ഇലകൾ വാടുന്ന സ്വഭാവം മുക്കുറ്റിക്കുമുണ്ട്. രാത്രിയിൽ ഇവയുടെ ഇലകൾ കൂമ്പിയിരിക്കും. ഇതിന്റെ വിത്തുകൾ മണ്ണിൽ വീണ് തൊട്ടടുത്ത മഴക്കാലത്ത് മുളക്കുന്നു',
      slides: ['01.jpg', '02.jpg', '03.jpg']
   }, {
    id: 22,
      botanical_name: 'Bacopa monnieri',
      en_names: ['Bacopa monnieri'],
      en_description: '',
      ml_names: ['ബ്രഹ്മി' ],
      ml_description: 'ത്രായന്തി, ശീതകാമിനി  എന്നീ സംസ്കൃതനാമത്തില്‍ അറിയപ്പെടുന്ന ഒരു ആയുർവേദ ഔഷധസസ്യമാണ്‌ ബ്രഹ്മി, പാടങ്ങളിലും അതുപോലെ നനവുകൂടുതലുള്ള പ്രദേശങ്ങളിലുമാണ് ബ്രഹ്മി ധാരാളമായി വളരുന്നത്, എട്ടു മില്ലീമീറ്റർ വരെ വ്യാസം വരുന്ന പൂക്കൾക്ക് വിളർത്ത നീലയോ വെള്ളയോ നിറമായിരിക്കും. സമുദ്ര നിരപ്പിൽ നിന്ന് 1200 മീറ്റർ വരെ ഉയർന്ന പ്രദേശങ്ങളിൽ ബ്രഹ്മി കാണപ്പെടുന്നു. നമ്മുടെ നാട്ടിൽ ധാരാളമായി കൃഷി ചെയ്യപ്പെടുന്ന സസ്യങ്ങളിലൊന്നാണിത്',
      slides: ['01.jpg', '02.jpg', '03.jpg'] 
   }, {

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