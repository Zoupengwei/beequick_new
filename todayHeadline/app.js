var app = angular.module("indexApp", ["ngRoute", "angularCSS"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "./home/home.html",
        css: "./home/css/home.css",
        controller: "homeCtrl",
    }).when("/video", {
        templateUrl: "./video/video.html",
        css: "./video/css/video.css",
        controller: "videoCtrl",
    }).when("/follow", {
        templateUrl: "./follow/follow.html",
        css: "./follow/css/follow.css",
        controller: "followCtrl",
    }).when("/personal", {
        templateUrl: "/personal.html",
        css: "./personal/css/personal.css",
        controller: "personalCtrl",
    }).otherwise("/home")

}])
