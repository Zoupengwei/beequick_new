/**
 * Created by 邹朋位 on 2017/3/3.
 */

define(["jquery"], function ($) {
    var obj = {};

    obj.clickFn = clickFn;

    //为标题的切换设置样式切换
    function clickFn() {
        $(".tabs li").on("click", function () {
            $(this).addClass("tab-item-active");
            $(this).siblings().removeClass("tab-item-active");
        });
    }

    return obj;
});