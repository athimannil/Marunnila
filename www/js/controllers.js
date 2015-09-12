angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {
  $scope.myLanguage = "ml";
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
})

.controller('donateCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true,
    languages: [
      { name: 'Malayalam', value: 'ml'},
      { name: 'English', value: 'en'}
    ]
  };
});
