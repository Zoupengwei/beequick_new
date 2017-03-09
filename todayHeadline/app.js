

var app = angular.module("indexApp",["ngRoute","angularCSS"]);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl:"./home/home.html",
        css:"./home/css/home.css",
        controller:"homeCtrl",
    }).otherwise("/home")

}])
