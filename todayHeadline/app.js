var app = angular.module("indexApp", ["ngRoute", "angularCSS", "ui.router", "ngAnimate", "ionic"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {  //主页
        templateUrl: "./home/home.html",
        css: "./home/css/home.css",
        controller: "homeCtrl",
    }).when("/video", {    //视频
        templateUrl: "./video/video.html",
        css: "./video/css/video.css",
        controller: "videoCtrl",
    }).when("/follow", {   //关注
        templateUrl: "./follow/follow.html",
        css: "./follow/css/follow.css",
        controller: "followCtrl",
    }).when("/personal", {  //我的
        templateUrl: "./personal/personal.html",
        css: "./personal/css/personal.css",
        controller: "personalCtrl",
    }).when("/channel", {   //频道
        templateUrl: "./channel/channel.html",
        css: "./channel/css/channel.css",
        controller: "channelCtrl",
    }).when("/search", {   //搜索
        templateUrl: "./search/search.html",
        css: "./search/css/search.css",
        controller: "searchCtrl",
    }).when("/mall", {   //头条商城
        templateUrl: "./mall/mall.html",
        css: "./mall/css/mall.css",
        controller: "mallCtrl",
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
        // templateUrl: './personal/personal.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(videoState);
    $stateProvider.state(followState);
    $stateProvider.state(personalState);

})
