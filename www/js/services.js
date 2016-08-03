angular.module('app.services', [])

.factory('services', ['$http', function($http){
  var baseUrl = 'https://bmkg-mufrizal.rhcloud.com';

  return {
    getGempa: function() {
      return $http.get(baseUrl + '/api/gempa');
    },
    getGempaDirasakan: function(){
      return $http.get(baseUrl + '/api/gempadirasakan');
    },
    getStasiun: function(){
      return $http.get(baseUrl + '/api/stasiun');
    }
  }
}])

.service('BlankService', [function(){

}]);
