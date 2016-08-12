// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'ionic-material', 'app.services', 'ngMap', 'ngCordova']);

app.run(function ($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
    $ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.confirm({
        title: 'Keluar',
        template: 'Anda yakin ingin menutup aplikasi ini ?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
  }, 100);

})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'Menu'
    })

    .state('app.GempaDirasakan', {
        url: '/GempaDirasakan',
        views: {
            'menuContent': {
                templateUrl: 'templates/GempaDirasakan.html',
                controller: 'GempaDirasakanController'
            }
        }
    })

    .state('app.SkalaIntesitas', {
        url: '/SkalaIntesitas',
        views: {
            'menuContent': {
                templateUrl: 'templates/SkalaIntesitasGempabumi.html',
                controller: 'SkalaIntensitasGempabumi'
            }
        }
    })

    .state('app.AntisipasiGempabumi', {
        url: '/AntisipasiGempabumi',
        views: {
            'menuContent': {
                templateUrl: 'templates/AntisipasiGempabumi.html',
                controller: 'AntisipasiController'
            }
        }
    })

    .state('app.GempaTerbaru', {
        url: '/GempaTerbaru',
        views: {
            'menuContent': {
                templateUrl: 'templates/GempaTerbaru.html',
                controller: 'GempaTerbaruController'
            }
        }
    })

    .state('app.SkalaMMI', {
        url: '/SkalaMMI',
        views: {
            'menuContent': {
                templateUrl: 'templates/SkalaMMI.html',
                controller: 'SkalaMMI'
            }
        }
    })

    .state('app.JaringanStasiun', {
        url: '/JaringanStasiun',
        views: {
            'menuContent': {
                templateUrl: 'templates/JaringanStasiun.html',
                controller: 'StasiunGempaController'
            }
        }
    })

    .state('app.Tentang', {
        url: '/Tentang',
        views: {
            'menuContent': {
                templateUrl: 'templates/Tentang.html',
                controller: 'TentangController'
            }
        }
    })

    .state('app.GempaTerkini', {
        url: '/GempaTerkini',
        views: {
            'menuContent': {
                templateUrl: 'templates/GempaTerkini5SR.html',
                controller: 'GempaTerkiniController'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/GempaTerbaru');
});
