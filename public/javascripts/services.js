angular.module('myapp')

.service('Auth',['$http','$location',function($http, $location){

  this.loginRequired = function($state){
    $http.get(API_ROOT+'auth/verify').then(function(){},function(){
      console.log("go to login");
      localStorage.removeItem('id_token');
      $location.path('/login');
    })
  }
}])