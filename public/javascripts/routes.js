angular.module('myapp')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/red", {
        templateUrl : "templates/red.html"
    })
    .when("/green", {
        templateUrl : "templates/green.html"
    })
    .when("/blue", {
        templateUrl : "templates/blue.html"
    })
    .otherwise({
        templateUrl : "templates/home.html"
    });
});