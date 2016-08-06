angular.module('app')
  .controller('GempaTerbaruController', function($scope, services, $ionicLoading) {

    // Setup the loader
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.dataGempa = {};

    function getGempa() {

      services.getGempa().success(function(data) {
        $ionicLoading.hide();
        $scope.dataGempa = data.gempa[0];
        $scope.longitude = data.gempa[0].point.coordinates.split(",")[0];
        $scope.latitude = data.gempa[0].point.coordinates.split(",")[1];
        console.log($scope.longitude);
      });
    }

    getGempa();

  })

  .controller('GempaTerkiniController', function($scope, services, $ionicLoading) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.dataGempa = {};

    function getGempa() {
      services.getGempa().success(function(data) {
        $ionicLoading.hide();
        $scope.dataGempa = data.gempa;
        $scope.longitude = data.gempa.point.coordinates.split(",");
        $scope.latitude = data.gempa.point.coordinates.split(",");
        console.log($scope.longitude);
      });
    }

    getGempa();

  })

  .controller('GempaDirasakanController', function($scope, services, $ionicLoading) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.dataGempa = {};

    function getGempaDirasakan() {
      services.getGempaDirasakan().success(function(data) {
        $ionicLoading.hide();
        $scope.dataGempa = data.Gempa;
        $scope.longitude = data.Gempa.point.coordinates.split(",");
        $scope.latitude = data.Gempa.point.coordinates.split(",");
        console.log($scope.longitude);
      });
    }

    getGempaDirasakan();

  })

  .controller('StasiunGempaController', function($scope, services, $ionicLoading) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.dataGempa = {};

    function getStasiun() {
      services.getStasiun().success(function(data) {
        $ionicLoading.hide();
        $scope.dataStasiun = data.Stasiun;
        $scope.longitude = data.Stasiun.point.coordinates.split(",");
        $scope.latitude = data.Stasiun.point.coordinates.split(",");
        console.log($scope.longitude);
      });
    }

    getStasiun();

  });
