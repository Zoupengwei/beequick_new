/**
 * Created by 邹朋位 on 2017/3/10.
 */

app.controller("personalCtrl", ["$scope", function ($scope) {
    //点击头条商城
    $('main .mall .top').on('click', function () {
        $("footer").hide();
    });

    //点击消息通知
    $("main .message").click(function () {
        showOrHide();
    });

    /*$("#wrapWindow").click(function () {
     showOrHide();
     });*/

    //点击模态窗口的关闭
    $("#wrapWindow .icon-iconcha").click(function () {
        showOrHide();
    });
    //点击模态窗口
    $(".messageWindow").click(function (event) {
        var event = event || window.event;
        event.stopPropagation();
    });
    //模态窗口的显示隐藏
    function showOrHide(event) {
        var event = event || window.event;
        $("#wrapWindow").css('display', $("#wrapWindow").css('display') == 'none' ? 'block' : 'none');
        event.stopPropagation();
    }
}])