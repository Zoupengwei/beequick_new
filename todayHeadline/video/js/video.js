/**
 * Created by 邹朋位 on 2017/3/10.
 */

app.controller("videoCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.tabList = ['推荐', '音乐', '搞笑', '社会', '小品', '生活', '影视', '娱乐', '呆萌', '游戏', '原创', '开眼'];

    //默认第一个
    $scope.currentIndex = 0;

    //点击改变样式
    $scope.changeTab = function (index) {
        //得到当前的index
        $scope.currentIndex = index;
    }

    //点击视频播放并设置
    $("main video").on('click', function () {
        this.play();
        this.setAttribute("controls", "controls");
    });

    //绑定菜单的显示与否
    $scope.isCheck = true;

    //点击菜单绑定分享界面
    $scope.isShow = function () {
        $scope.isCheck = !$scope.isCheck;
        console.log(666)
    }

    //获取视频资源
    $http.get("./data/zongYi2.json")
        .success(function (req) {
            console.log(req);
        })

}])

// var animateApp = angular.module("animateApp",['ngAnimate']);