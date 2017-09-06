var API_ROOT = "/api/"
angular.module('myapp')

.controller('HomeCtrl', function($scope,$http) {
  $http.get(API_ROOT+'channels').then(function(res){
  	$scope.channels = res.data;
  })
})