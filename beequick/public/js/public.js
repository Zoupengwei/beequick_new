/**
 * Created by Auser on 2017/3/1.
 */

define(["jquery"], function ($) {
    var obj = {};
    //存储每个商品对象的数组
    var objArr = [];

    obj.savePro = savePro;
    obj.lazyLoad = lazyLoad;
    obj.loadPic = loadPic;

    //保存购物车数据到sessionStorage
    function savePro(name, price, imgSrc, num, value) {
        //封装每个商品对象
        var proObj = {
            name: name,
            price: price,
            imgSrc: imgSrc,
            num: num,
        };

        if (value > 0) {
            //把对象存入数组
            objArr.push(proObj);
        } else {
            objArr.pop(proObj);
        }

        //序列化后存入sessionStorage
        var proInfoStr = JSON.stringify(objArr);
        window.sessionStorage.setItem('newObjArr', proInfoStr);
    }

    //懒加载
    function lazyLoad(obj1, obj2) {
        var imgs = obj1.find("[data-src]");

        obj2.on("onscroll", function () {
            loadPic(obj1);
        });
    }

    //导入懒加载的图片
    function loadPic(obj) {
        //获取需要进行懒加载的图片，带有属性data-src
        var imgs = obj.find("[data-src]");
        //获取屏幕高度
        var height = obj.height;
        for (var i = 0; i < imgs.length; i++) {
            var $imgs = $(imgs[i]);
            if ($imgs.offset().top < height) {
                $imgs.attr("src", $imgs.attr("data-src"));
            }
        }
    }

    return obj;
});
