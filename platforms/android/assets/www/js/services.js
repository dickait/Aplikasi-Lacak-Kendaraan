angular.module('app.services', [])

.factory('services', ['$http', function($http){

  var baseUrl = 'http://dickaariptian.xyz';
  return {
    getData: function() {
     
      return $http.get(baseUrl + '/api/getmap.php');
    }
  }
}])

.service('BlankService', [function(){

}]);
