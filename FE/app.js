var app = angular.module('CarApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider

        .when("/Add-car", {
        templateUrl: "add-car/car-list.html",
        controller: "CarListController"
    })
    
    .when("/", {
        templateUrl:"home-page/home.html",
        controller:"HomeController"
    })

}]);