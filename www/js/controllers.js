angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {})

.controller('aboutCtrl', function($scope) {})

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
  $scope.myfavs = myfavs.all();
  $scope.yesFav = false;
  $scope.isFav = function(thisFav){
    if(checkExist(thisFav)){
      $scope.yesFav = true;
    }
  };
  function checkExist(thisFav) {
    if($scope.myfavs.indexOf(thisFav) != -1){
      return true;
    }else{
      return false;
    }
  }
  $scope.addtofav = function(thisFav){
    if(checkExist(thisFav)){
      myfavs.remove(thisFav);
      $scope.yesFav = false;
    }else{
      myfavs.add(thisFav);
      $scope.yesFav = true;
    }
  };
})

.controller('donateCtrl', function($scope) {
})

.controller('favCtrl', function($scope, leafs, myfavs) {
  $scope.leafs = leafs.all();
  $scope.myfavs = myfavs.all();
  console.log("kooy");
  $scope.removefav = function(thisFav){
    myfavs.remove(thisFav);
  };
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