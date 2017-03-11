/**
 * Created by 邹朋位 on 2017/3/11.
 */

app.controller("searchCtrl", ["$scope", function ($scope) {
    //点击返回按钮
    $(".backHome").on('click', function () {
        window.history.go(-1);
        $("footer").show();
    })
}])