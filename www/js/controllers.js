angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {

  // our array
  // var savedfav = [2, 4, 7];
  // storing our array as a string
  // localStorage.setItem("savedFav", JSON.stringify(savedfav));

  // var retrievedData = localStorage.getItem("savedFav");
  // var myfavs = JSON.parse(retrievedData);
  // $scope.favlist = myfavs;

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
  
  $scope.remove = function(leaf) {
    leafs.remove(leaf);
  };
  
  $scope.searchFilter = function(obj) {
    var re = new RegExp($scope.filterName, 'i');
    return !$scope.filterName || re.test(obj.botanical_name) || re.test(obj.en_names) || re.test(obj.ml_names);
  };
})

.controller('leafDetailCtrl', function($scope, $stateParams, leafs, myfavs) {
  $scope.leaf = leafs.get($stateParams.leafId);
  $scope.yesFav = false;

  $scope.myfavs = myfavs.all();

  // retrieving our data and converting it back into an array
  // var retrievedData = localStorage.getItem("savedFav");
  // var myfavs = JSON.parse(retrievedData);
  //making sure it still is an array
  /*console.log(myfavs.length);
  console.log(myfavs);*/

  // var retrievedData = localStorage.getItem("savedFav");
  // var myfavs = JSON.parse(retrievedData);
  // $scope.favlist = myfavs;

  $scope.isFav = function(id){
    console.log($scope.myfavs);
    if(checkExist(id)){
      $scope.yesFav = true;
    }
  };
  function checkExist(id) {
    if($scope.myfavs.indexOf(id) != -1){
      return true;
    }else{
      return false;
    }
  }

  $scope.addtofav = function(id){
    console.log(checkExist(id));
    // $scope.remove = function(leaf) {
      myfavs.remove(id);
        $scope.myfavs = myfavs.all();
  console.log($scope.myfavs);

    // };
    // if(checkExist(id)){
      // Delete from favlist
      // var existItem = myfavs.indexOf(id);
      // myfavs.splice(existItem, 1);
      // localStorage.setItem("savedFav", JSON.stringify(myfavs));
      // $scope.yesFav = false;
      // console.log("exist");
    // }else{

      // Add to fav
      // myfavs.push(id);
      // localStorage.setItem("savedFav", JSON.stringify(myfavs));
      // $scope.yesFav = true;
      // console.log("New one");
    // }
  };
})

.controller('donateCtrl', function($scope) {
})

.controller('favCtrl', function($scope, leafs, myfavs) {
  $scope.leafs = leafs.all();
  $scope.myfavs = myfavs.all();
  console.log($scope.myfavs);
  // retrieving our data and converting it back into an array
  // $scope.loadFromFav = function (argument) {
    // var retrievedData = localStorage.getItem("savedFav");
    // var myfavs = JSON.parse(retrievedData);
    // $scope.favlist = myfavs;
    // console.log("Hello mate");
  // };
})



.filter('filterFav', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
});









