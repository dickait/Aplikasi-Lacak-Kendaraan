angular.module('app')
    .controller('DataTerbaruController', function($scope, services, $ionicLoading, $ionicPlatform, $ionicPopup, $cordovaNetwork, $state, $cordovaGeolocation, $interval) {
        // $ionicPlatform.ready(function() {
        //     if ($cordovaNetwork.isOffline()) {
        //         $ionicLoading.hide();
        //         $ionicPopup.alert({
        //                 title: 'Jaringan Terputus',
        //                 template: 'Tidak dapat dimuat, Hubungkan dengan Internet'
        //             })
        //             .then(function(res) {
        //                 ionic.Platform.exitApp();
        //             })
        //     }
        // })

        // $ionicLoading.show({
        //   template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        // });

        $ionicPopup.alert({
            title: '<div class="a"><b>Aplikasi Lacak Kendaraan</b></div> Aplikasi ini untuk melacak kendaraan yang telah dipasang mikrokontroller Arduino dan SIM808. <div>Jangan lupa hidupkan GPS!</div>',
            template: ''
        });
        $scope.dataPosisi = {};

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        var overCur = $cordovaGeolocation.getCurrentPosition(function(pos) {
                $scope.latitudeCur = pos.coords.latitude;
                $scope.longitudeCur = pos.coords.longitude;
                console.log(JSON.stringify($scope.latitude));
                console.log(JSON.stringify($scope.longitude));
            },

            function(error) {
                alert('Unable to get location: ' + error.message);
            }, options);



        var overOver = function getData() {
            services.getData().success(function(data) {
                $ionicLoading.hide();
                $scope.dataPosisi = data.data.pop();
                $scope.date = new Date($scope.dataPosisi.waktu);
                $scope.date = $filter('date')($scope.date, 'dd MMMM yyyy HH:mm:ss');
                $scope.$apply();
                console.log(data.data);
            });
        }
        overCur;
        overOver;
        $interval(overOver, 1000);
        $interval(overCur, 1000);
    })

.controller('DataStreetController', function($scope, services, $ionicLoading, $ionicPlatform, $ionicPopup, $cordovaNetwork, $state, $cordovaGeolocation, $interval) {


    $ionicPopup.alert({
        title: '<div class="a"><b>Peringatan!</b></div> Posisi ini merupakan posisi terakhir yang terdeteksi. Silahkan cari disekitar atau berkomunikasi dengan orang sekitar. Jika tidak terdeteksi, silahkan cari manual di menu posisi kendaraan.',
        template: ''
    });

    $scope.dataPosisi = {};

    var overOver = function getData() {
        services.getData().success(function(data) {
            $ionicLoading.hide();
            $scope.dataPosisi = data.data.pop();
            $scope.$apply();
            console.log(data.data);
        });
    }
    overOver;
    $interval(overOver, 1000);
})

.controller('DataRiwayatController', function($scope, services, $ionicLoading, $ionicPlatform, $ionicPopup, $cordovaNetwork, $state, $cordovaGeolocation, $interval) {
    var options = {
        enableHighAccuracy: true
    };
    var overCur = $cordovaGeolocation.getCurrentPosition(function(pos) {
            $scope.latitudeCur = pos.coords.latitude;
            $scope.longitudeCur = pos.coords.longitude;
            console.log(JSON.stringify($scope.latitude));
            console.log(JSON.stringify($scope.longitude));
        },
        function(error) {
            alert('Unable to get location: ' + error.message);
        }, options);
    $scope.dataPosisi = {};

    var overOver = function getData() {
        services.getData().success(function(data) {
            $ionicLoading.hide();
            $scope.dataPosisi = data.data;
            $scope.data10 = $scope.dataPosisi[$scope.dataPosisi.length - 1];
            $scope.data9 = $scope.dataPosisi[$scope.dataPosisi.length - 2];
            $scope.data8 = $scope.dataPosisi[$scope.dataPosisi.length - 3];
            $scope.data7 = $scope.dataPosisi[$scope.dataPosisi.length - 4];
            $scope.data6 = $scope.dataPosisi[$scope.dataPosisi.length - 5];
            $scope.data5 = $scope.dataPosisi[$scope.dataPosisi.length - 6];
            $scope.data4 = $scope.dataPosisi[$scope.dataPosisi.length - 7];
            $scope.data3 = $scope.dataPosisi[$scope.dataPosisi.length - 8];
            $scope.data2 = $scope.dataPosisi[$scope.dataPosisi.length - 9];
            $scope.data1 = $scope.dataPosisi[$scope.dataPosisi.length - 10]
            $scope.$apply();
            console.log(data.data);
        });
    }
    overCur;
    overOver;
    $interval(overOver, 1000);
    $interval(overCur, 1000);
});