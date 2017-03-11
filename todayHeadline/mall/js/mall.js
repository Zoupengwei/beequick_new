/**
 * Created by 邹朋位 on 2017/3/9.
 */

app.controller("mallCtrl", ["$scope", "$http", function ($scope, $http) {
    //点击返回按钮
    $("header .left").on('click', function () {
        window.history.go(-1);
        $("footer").show();
    });

    $scope.swiperData = [];

    $http.get("./data/swiperData.json")
        .success(function (req) {
            $scope.swiperData = req.title;
        })


    //设置轮播
    var mySwiper = new Swiper('.swiper-container-vertical', {
        autoplay: 3000,
        direction: "vertical",
        loop: true,
        speed: 600,
        /*observer和observeParents，前者启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者
        修改swiper的子元素时,自动初始化swiper。后者原理和前者一样，
        只是将observe应用于Swiper的父元素。两者默认值都为false。*/
        observer: true,
        observeParent: true,
    });
}]);