app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $ionicPopup) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        // window.open('https://twitter.com/satish_vr2011', '_blank');
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

    // .fromTemplate() method
    var template = ' <button class="button button-block button-calm ink" data-ink-color="#9DEAFF" data-ink-opacity="1">' +
                    '   Submit'+
                    ' </button>' ;


    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});
