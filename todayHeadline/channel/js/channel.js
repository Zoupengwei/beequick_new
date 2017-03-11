/**
 * Created by 邹朋位 on 2017/3/11.
 */


app.controller("channelCtrl",["$scope",function ($scope) {
    $(".backHome").on('click',function () {
        //返回上一级菜单
       window.history.go(-1);
       //底部显示
        $("footer").show();
    });
}])