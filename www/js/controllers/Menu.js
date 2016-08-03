app.controller('Menu', function ($scope, $ionicPopup) {    
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
