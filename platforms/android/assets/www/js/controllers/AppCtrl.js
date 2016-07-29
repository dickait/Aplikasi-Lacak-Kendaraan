app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $ionicPopup) {
    // Form data for the login modal
    $scope.loginData = {};

    // var navIcons = document.getElementsByClassName('ion-navicon');
    // for (var i = 0; i < navIcons.length; i++) {
    //     navIcons.addEventListener('click', function () {
    //         this.classList.toggle('active');
    //     });
    // }

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        $scope.showConfirm = function() {
         var confirmPopup = $ionicPopup.confirm({
           title: 'Informasi Gempabumi',
           template: 'Anda yakin ingin keluar dari aplikasi ?'
         });

         confirmPopup.then(function(res) {
           if(res) {
            //  console.log('You are sure');
            ionic.Platform.exitApp();
           } else {
             console.log('You are not sure');
           }
         });
       };
    });

});
