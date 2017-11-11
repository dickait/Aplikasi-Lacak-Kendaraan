// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'ionic-material', 'app.services', 'ngMap', 'ngCordova']);

app.run(function($ionicPlatform, $ionicPopup, $interval) {
    $ionicPlatform.ready(function() {
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

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
    })



    .state('app.AntisipasiKehilangan', {
        url: '/AntisipasiKehilangan',
        views: {
            'menuContent': {
                templateUrl: 'templates/AntisipasiKehilangan.html',
                controller: 'AntisipasiController'
            }
        }
    })

    .state('app.DataTerbaru', {
        url: '/DataTerbaru',
        views: {
            'menuContent': {
                templateUrl: 'templates/DataTerbaru.html',
                controller: 'DataTerbaruController'
            }
        }
    })



    .state('app.DataStreet', {
        url: '/DataStreet',
        views: {
            'menuContent': {
                templateUrl: 'templates/DataStreet.html',
                controller: 'DataStreetController'
            }
        }
    })

    .state('app.DataRiwayat', {
        url: '/DataRiwayat',
        views: {
            'menuContent': {
                templateUrl: 'templates/DataRiwayat.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.MapRiwayat', {
        url: '/MapRiwayat',
        views: {
            'menuContent': {
                templateUrl: 'templates/MapRiwayat.html',
                controller: 'DataRiwayatController'
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

    .state('app.Data10', {
        url: '/RiwayatMap/Riwayat10',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat10.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.Data9', {
        url: '/RiwayatMap/Riwayat9',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat9.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.Data8', {
        url: '/RiwayatMap/Riwayat8',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat8.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.Data7', {
        url: '/RiwayatMap/Riwayat7',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat7.html',
                controller: 'DataRiwayatController'
            }
        }
    })


    .state('app.Data6', {
        url: '/RiwayatMap/Riwayat6',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat6.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.Data5', {
        url: '/RiwayatMap/Riwayat5',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat5.html',
                controller: 'DataRiwayatController'
            }
        }
    })


    .state('app.Data4', {
        url: '/RiwayatMap/Riwayat4',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat4.html',
                controller: 'DataRiwayatController'
            }
        }
    })



    .state('app.Data3', {
        url: '/RiwayatMap/Riwayat3',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat3.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.Data2', {
        url: '/RiwayatMap/Riwayat2',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat2.html',
                controller: 'DataRiwayatController'
            }
        }
    })

    .state('app.Data1', {
        url: '/RiwayatMap/Riwayat1',
        views: {
            'menuContent': {
                templateUrl: 'templates/RiwayatMap/Riwayat1.html',
                controller: 'DataRiwayatController'
            }
        }
    })




    $urlRouterProvider.otherwise('/app/DataTerbaru');
});