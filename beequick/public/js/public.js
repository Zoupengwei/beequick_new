/**
 * Created by Auser on 2017/3/1.
 */

define(["jquery"], function ($) {
    var obj = {};
    //存储每个商品对象的数组
    var objArr = [];

    obj.savePro = savePro;

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
    function lazy(obj1, obj2) {

    }

    return obj;
});
