/**
 * Created by 邹朋位 on 2017/3/10.
 */

app.controller("personalCtrl", ["$scope", function ($scope) {
    //点击头条商城
    $('main .mall .top').on('click', function () {
        $("footer").hide();
    });
}])