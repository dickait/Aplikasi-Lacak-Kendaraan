angular.module('app.services', [])

.factory('services', ['$http', function($http){
  //var baseUrl = 'http://192.168.2.116';
  var baseUrl = 'https://bmkg-mufrizal.rhcloud.com';

  return {
    getCuaca: function() {
      //return $http.get(baseUrl + '/BMKG-Server/index.php/CuacaRestController/cuaca/');
      //return $http.get(baseUrl + '/index.php/CuacaRestController/cuaca/');
      // return $http.get(baseUrl + '/api/cuaca');
    },
    getGempa: function() {
      //return $http.get(baseUrl + '/BMKG-Server/index.php/GempaRestController/gempa/');
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
