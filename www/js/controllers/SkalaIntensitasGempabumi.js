app.controller('SkalaIntensitasGempabumi', function ($scope, $stateParams, ionicMaterialInk) {

  ionicMaterialInk.displayEffect();

  $scope.items = [{
    title: 'Skala Intensitas',
    text: 'SIG adalah Skala Intensitas Gempabumi. Skala ini menyatakan dampak yang ditimbulkan akibat terjadinya gempabumi. Skala Intensitas Gempabumi (SIG-BMKG) digagas dan disusun dengan mengakomodir keterangan dampak gempabumi berdasarkan tipikal budaya atau bangunan di Indonesia. Skala ini disusun lebih sederhana dengan hanya memiliki lima tingkatan yaitu I-V. SIG-BMKG diharapkan bermanfaat untuk digunakan dalam penyampaian informasi terkait mitigasi gempabumi dan atau respon cepat pada kejadian gempabumi merusak. Skala ini dapat memberikan kemudahan kepada masyarakat untuk dapat memahami tingkatan dampak yang terjadi akibat gempabumi dengan lebih baik dan akurat.'
  }];

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };
});
