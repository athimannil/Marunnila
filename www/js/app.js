// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    if (typeof analytics !== "undefined") {
      analytics.startTrackerWithId("UA-18634542-18");
    }else{
      console.log("google analytics not working");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',

    controller: 'homeCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tab.favorite', {
    url: '/favorite',
    views: {
      'tab-favorite': {
        templateUrl: 'templates/tab-favorite.html',
        controller: 'favCtrl'
      }
    }
  })

  .state('tab.leafs', {
      url: '/leafs',
      views: {
        'tab-leafs': {
          templateUrl: 'templates/tab-leafs.html'
          // controller: 'leafsCtrl'
        }
      }
    })
    .state('tab.leaf-detail', {
      url: '/leafs/:leafId',
      views: {
        'tab-leafs': {
          templateUrl: 'templates/leaf-detail.html',
          controller: 'leafDetailCtrl'
        }
      }
    })

  .state('tab.donate', {
    url: '/donate',
    views: {
      'tab-donate': {
        templateUrl: 'templates/tab-donate.html',
        controller: 'donateCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/leafs');

});
