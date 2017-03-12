/**
 * Created by 邹朋位 on 2017/3/11.
 */

app.directive("addItem", function () {
    return{
        template:"<li><a href='javascript:;'>{{text}}</a></li>",
        restrict:"ECMA",
        replace:true,
        controller:function ($scope) {
            $scope.text = "历史";
        },
        scope:"&",
        link:function (scope, ele, attribute) {
            ele.on('click', 
            function () {
                ele.append('<li><a href="javascript:;">{{text}}</a></li>');
            })
        }
    }
})


app.controller("channelCtrl", ["$scope", function ($scope) {
    $(".backHome").on('click', function () {
        //返回上一级菜单
        window.history.go(-1);
        //底部显示
        $("footer").show();
    });

}])