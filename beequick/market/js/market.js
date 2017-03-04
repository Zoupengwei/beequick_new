/**
 * Created by Auser on 2017/3/1.
 */

define(["jquery", "public"],
    function ($, pub) {
        var obj = {};

        //ajax请求数据
        obj.getData = getData;
        //左侧标题栏的点击事件
        obj.clickFn = clickFn;

        //获取数据
        function getData(param) {
            $.get("http://h5.yztctech.net/api/axf/apicategory.php", {category: param},
                function (req) {
                    // console.log(req);
                    var data = JSON.parse(req).data;
                    var html = '';

                    for (var i in data) {
                        html += '<dd class="goods-items">' +
                            '<a href="javascript:;">' +
                            '<img class="product-image" data-src=' + data[i].img + ' src=' + data[i].img +
                            ' /><p class="p-title p-ellipsis">' + data[i].name +
                            '</p><p class="tag"><span class="p-tag selection">精选</span>' +
                            '<span class="p-tag gift">' + data[i].pm_desc +
                            '</span></p><p class="p-intro p-ellipsis">' + data[i].specifics +
                            '</p><p class="p-price">￥' + data[i].price +
                            '</p><a href="javascript:;"><span class="icon-font minus-goods"></span>' +
                            '<span class="num"></span><span class="icon-font add-goods"></span></a></a></dd>'
                    }

                    $("main .goods-list .allItem").html(html);
                    var addData = JSON.parse(localStorage.address);
                    $(".position").html(addData.district + " " + addData.street);

                    changeNum($(".add-goods"), 1);
                    changeNum($(".minus-goods"), -1);

                    //懒加载
                    pub.loadPic($(".goods-list"));
                    pub.lazyLoad($(".goods-list"), $(".allItem"));
                });
        }

        //给左侧边标题的每个li绑定点击事件
        function clickFn() {
            $(".goods-category-list li").click(function () {
                //切换样式
                $(this).find("a").addClass("current");
                $(this).siblings().find("a").removeClass("current");

                //获取该项的数据
                getData($(this).children().text());
            });
        }

        //添加和删除按钮的点击事件
        function changeNum(btn, value) {

            for (let i = 0; i < btn.length; i++) {
                btn.eq(i).on("click", function () {
                    $(".num").eq(i).show();
                    $(".num").eq(i).html($(".num").eq(i).html() * 1 + value);
                    $(".totalNum").html($(".totalNum").html() * 1 + value);

                    var name = $(".p-title").eq(i).html();
                    var price = $(".p-price").eq(i).html();
                    var imgSrc = $(".product-image").eq(i).attr("src");
                    var num = $(".num").eq(i).html() * 1;

                    //封装每个商品对象
                    /*var proObj = {
                     name: $(".p-title").eq(i).html(),
                     price: $(".p-price").eq(i).html(),
                     imgSrc: $(".product-image").eq(i).attr("src"),
                     num: $(".num").eq(i).html() * 1,
                     };

                     if (value > 0) {
                     //把对象存入数组
                     objArr.push(proObj);
                     } else {
                     objArr.pop(proObj);
                     }

                     //序列化后存入sessionStorage
                     var proInfoStr = JSON.stringify(objArr);
                     window.sessionStorage.setItem('newObjArr', proInfoStr);*/

                    //存入sessionStorage
                    /*require(['./public/js/public'], function (ctrl) {
                     ctrl.savePro(name, price, imgSrc, num, value);
                     });*/
                    pub.savePro(name, price, imgSrc, num, value);


                    //控制删除按钮的显示隐藏
                    if ($(".num").eq(i).html() == 0) {
                        $(".minus-goods").eq(i).hide();
                        $(".num").eq(i).hide();
                    } else {
                        $(".minus-goods").eq(i).show();
                    }

                    //控制总数的显示隐藏
                    if ($(".totalNum").html() == 0) {
                        $(".totalNum").hide();
                    } else {
                        $(".totalNum").show();
                    }
                });
            }
        }

        return obj;
    });