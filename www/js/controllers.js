angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {
  // our array
  var savedfav = [2, 4, 7];
  // storing our array as a string
  localStorage.setItem("savedFav", JSON.stringify(savedfav));
})

.controller('aboutCtrl', function($scope) {
})

.controller('leafsCtrl', function($scope, leafs) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.leafs = leafs.all();
  /*
  $scope.remove = function(leaf) {
    leafs.remove(leaf);
  };
  */
  $scope.searchFilter = function(obj) {
    var re = new RegExp($scope.filterName, 'i');
    return !$scope.filterName || re.test(obj.botanical_name) || re.test(obj.en_names) || re.test(obj.ml_names);
  };
})

.controller('leafDetailCtrl', function($scope, $stateParams, leafs) {
  $scope.leaf = leafs.get($stateParams.leafId);

  $scope.yesFav = false;

  // retrieving our data and converting it back into an array
  var retrievedData = localStorage.getItem("savedFav");
  var myfavs = JSON.parse(retrievedData);
  //making sure it still is an array
  /*console.log(myfavs.length);
  console.log(myfavs);*/

  $scope.isFav = function(id){
    if(checkExist(id)){
      $scope.yesFav = true;
    }
  };
  function checkExist(id) {
    if(myfavs.indexOf(id) != -1){
      return true;
    }else{
      return false;
    }
  }

  $scope.addtofav = function(itemId){

    var bank = myfavs.indexOf(itemId);
    console.log(bank);

    // localStorage.setItem('names_length', myfavs.length);
    if(checkExist(itemId)){
      // Delete from favlist
      myfavs.splice(bank, 1);
      localStorage.setItem("savedFav", JSON.stringify(myfavs));
      $scope.yesFav = false;
    }else{
    // var savedfav = [2, 4, 7];
    // storing our array as a string

      console.log("Not yet favorited");
    }
  };
})

.controller('donateCtrl', function($scope) {
})

.controller('favCtrl', function($scope, leafs) {
  $scope.leafs = leafs.all();
});