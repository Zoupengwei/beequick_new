define(["jquery", "swiper"], function ($, swiper) {
    var obj = {};

    obj.getSwipeMenuData = getSwipeMenuData;

    obj.getMainData = getMainData;

    //获取轮播和菜单的数据
    function getSwipeMenuData() {
        $.get("http://h5.yztctech.net/api/axf/apihome.php",
            function (req) {
                // console.log(req);
                var data = JSON.parse(req);
                var slide = data.data.slide;
                var sipwerHtml = '';

                //获取轮播图的数据
                for (var i in slide) {
                    sipwerHtml += '<li class="swiper-slide"><img src=' + slide[i].activity.img + ' /></li>';
                }
                $(".banner ul").html(sipwerHtml);

                //启动轮播
                swipe();

                var menu = data.data.menu;
                var menuHtml = '';

                //获取菜单的数据
                for (var i in menu) {
                    if (i == 1) {
                        //疯狂秒杀
                        menuHtml += '<li><a href="#crazyShop"><figure><img src=' +
                            menu[i].activity.img +
                            ' /><figcaption>' + menu[i].activity.name +
                            '</figcaption></figure></a></li>';

                    } else {
                        menuHtml += '<li><a href="#"><figure><img src=' +
                            menu[i].activity.img +
                            ' /><figcaption>' + menu[i].activity.name +
                            '</figcaption></figure></a></li>';
                    }
                }
                $(".content>.menu ul").html(menuHtml);

                //判断是否获取地理位置，没有的话就获取
                if (!$(".address").html()) {
                    getLoc();
                    var addData = JSON.parse(localStorage.address);
                    $(".address").html(addData.district + " " + addData.street);
                }

                //绑定扫一扫
                $("#scan").on('click', function () {
                    scan();
                });

            });
    };

    //轮播图的控制函数
    function swipe() {
        var myswiper = new Swiper(".swiper-container", {
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });
    };

    //获取主要内容的数据
    function getMainData() {
        $.get("http://h5.yztctech.net/api/axf/apihomehot.php",
            function (req) {
                // console.log(req);
                var data = JSON.parse(req).data;
                var html = '';

                for (var i in data) {

                    html += `<li class="product-item"><div class="pic" 
                        style= "background: url('${data[i].img} ')no-repeat;background-size: 100% 100%"></div>
                        <p class="pro-title"> ${data[i].name} </p>
                        <div class="discout"><span class="jingxuan">精选</span>
                        <span class="huodong">${data[i].pm_desc}</span></div>
                        <div class="pro-desc"><p class="specification">
                        ${data[i].specifics}</p><p class="price">
                        <sapn class="now-price">¥${data[i].price}</sapn>
                        <span class="pass-price">¥
                        ${data[i].market_price}</span></p>
                        <span class="add icon-plus"></span></div></li>
                        `;

                    //*1转化为number
                    if ((i * 1 + 1) % 3 == 0) {
                        var num = (i * 1 + 1) / 3 - 1;
                        $(".act-category-item-goodList").eq(num).html(html);
                        html = '';
                    }
                }
                changeNum($(".add"), 1);
            });
    };

    //添加按钮绑定
    function changeNum(btn, value) {
        for (let i = 0; i < btn.length; i++) {
            btn.eq(i).on("click", function () {
                $(".totalNum").html($(".totalNum").html() * 1 + value);

                var name = $(".pro-title").eq(i).html();
                var price = $(".now-price").eq(i).html();
                //获取背景图片的url,注意结果是带有引号的
                var imgSrc = $(".pic").eq(i).css("backgroundImage").toString().split('("')[1].split('")')[0];
                var num = 1;

                //存入sessionStorage
                require(['./public/js/public'], function (ctrl) {
                    ctrl.savePro(name, price, imgSrc, num, value);
                });

                //封装每个商品对象
                /*var proObj = {
                 name: $(".pro-title").eq(i).html(),
                 price: $(".now-price").eq(i).html(),
                 imgSrc: urlStr,
                 num: 1,
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

                //控制总数的显示隐藏
                if ($(".totalNum").html() == 0) {
                    $(".totalNum").hide();
                } else {
                    $(".totalNum").show();
                }
            });
        }
        ;
    }

    //扫一扫的接口函数
    function scan() {
        wx.scanQRCode({
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            },
        });
    }

    //获取地址的接口
    function getLoc() {

        wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度

                var locationArr = gcj02tobd09(longitude, latitude);
                latitude = locationArr[1];
                longitude = locationArr[0];
                get_address(latitude, longitude);
            },
        });

    }

    //bd09坐标转换具体地址函数
    function get_address(lat, lng) {
        var point = new BMap.Point(lng, lat);
        var geoc = new BMap.Geocoder();

        geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            var o = {
//				province:addComp.province,
//				city:addComp.city,
                district: addComp.district,
                street: addComp.street,
//				streetNumber:addComp.streetNumber
            }
            address = JSON.stringify(o);
            //位置信息存储到本地，后面的页面调用；
            localStorage.address = address;
        });

    };

    //定义一些常量
    var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
    var PI = 3.1415926535897932384626;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;

    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
     * 即谷歌、高德 转 百度
     */
    function gcj02tobd09(lng, lat) {
        var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
        var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
        var bd_lng = z * Math.cos(theta) + 0.0065;
        var bd_lat = z * Math.sin(theta) + 0.006;
        return [bd_lng, bd_lat]
    }

    return obj;
});