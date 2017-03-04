/**
 * Created by Auser on 2017/3/1.
 */

define(["jquery"], function ($) {
    var obj = {};

    obj.changeNum = changeNum;
    obj.getData = getData;

    //添加删除的函数
    function changeNum(btn, value) {

        for (var i = 0; i < btn.length; i++) {
            //let j = i;//解决闭包
            btn.eq(i).on("click", function () {
                var $num = $(this).parent().children(".num");
                var $totalNum = $(".totalNum");

                $num.html($num.html() * 1 + value);

                $totalNum.html($totalNum.html() * 1 + value);
                $totalNum.show();

                //每一项物品为0时删除该项
                if ($num.html() == 0) {
                    $(this).parent().parent().parent().parent().remove();
                    //还需要删除sessionStorage中的
                }

                //当购物车总数为0时，切换页面
                if ($totalNum.html() == 0) {
                    $totalNum.hide();
                    require(["text!./shopCar/emptyShopCar.html"], function (tpl) {
                        $("#content").html(tpl);
                    });
                }
            });
        }


    }

    //sessionStroage获取数据
    function getData() {
        //获取sessionStorage数据并反序列化
        var data = sessionStorage.getItem("newObjArr");
        newObjArr = JSON.parse(data);
        var html = '';

        for (var i in newObjArr) {
            html += `<div class="car-goods-item">
                        <div class="checkbox">
                            <span>
                                <input class="input_check" type="checkbox" id="${'check' + i}">
                                <label for="${'check' + i}"></label>
                            </span>
                        </div>
                
                        <div class="goods-info">
                            <a class="p-pic" href="javascript:;">
                            <img src="${newObjArr[i].imgSrc}"/></a>
                            <a class="p-intro" href="javascript:;">
                                <p class="p-title">${newObjArr[i].name}</p>
                                <p class="p-price">${newObjArr[i].price}</p>
                                <p class="btns">
                                    <span class="icon-font reduce"></span>
                                    <span class="num">${newObjArr[i].num}</span>
                                    <span class="icon-font add"></span>
                                </p>
                            </a>
                        </div>
                    </div>
                `;
        }
        $(".carContent").html(html);

        changeNum($(".add"), 1);
        changeNum($(".reduce"), -1);

        checkClick();
    }

    function checkClick() {
        var $inputCheck = $(".input_check");

        for (var i = 0, len = $inputCheck.length; i < len; i++) {

            let j = i;
            $inputCheck.eq(i).on("click", function () {
                var $totalPrice = $(".total em");
                var $price = $(".p-price").eq(j).html().split("¥")[1] * 1;
                var $num = $(".num").eq(j).html() * 1;
                var itemPrice = $price * $num;

                if ($inputCheck.eq(j).is(':checked')) {
                    $totalPrice.html($totalPrice.html()*1 + itemPrice);
                } else {
                    $totalPrice.html($totalPrice.html()*1 - itemPrice);
                }
            })


        }
    }

    return obj;
});