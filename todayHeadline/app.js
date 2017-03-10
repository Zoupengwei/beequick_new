var app = angular.module("indexApp", ["ngRoute", "angularCSS", "ui.router"]);

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
        templateUrl: "./personal/personal.html",
        css: "./personal/css/personal.css",
        controller: "personalCtrl",
    }).otherwise("/home")

}])

//切换底部菜单栏样式
app.config(function ($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        // templateUrl: './home/home.html'
    }

    var videoState = {
        name: 'video',
        url: '/video',
        // templateUrl: './video/video.html'
    }

    var followState = {
        name: 'follow',
        url: '/follow',
        // templateUrl: './follow/follow.html'
    }

    var personalState = {
        name: 'personal',
        url: '/personal',
        templateUrl: './personal/personal.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(videoState);
    $stateProvider.state(followState);
    $stateProvider.state(personalState);

})
