<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx3b5019935778a513", "f1a2f3c39011e9a308f3a7e643d71c33");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定位</title>
    <link rel="stylesheet" href="./public/css/reset.css">

    <style type="text/css">
        body{
            background-color: #FFD82B;
            overflow: hidden;
            border: 1px solid transparent;
            height:17.78rem;
        }
        .position{
            position: relative;
            width:6.547rem;
            height: 6.547rem;
            margin:  3.719rem auto 0;
        }
        .position .position-logo{
            width: 6.547rem;
            height: 3.281rem;
            background: url("./public/img/boot_logo-88fb0b99.png") no-repeat center center;
            background-size: contain;
            /*margin:  3.719rem auto 0;*/
            position: absolute;
        }
        .position .position-loading{
            width: 1.172rem;
            height: 1.172rem;
            background: url("./public/img/boot_gps-5f778fd8.png") no-repeat center center;
            background-size: contain;
            /*margin: 1rem auto 0;*/
            position: absolute;
            bottom: 1.3rem;
            left: 2.688rem;
        }
        .position p{
            color: #333;
            position: absolute;
            bottom: .7rem;
            left: 2.617rem;
            font-size: 0.438rem;
        }
    </style>
</head>
<body>
<div class="position">
    <div class="position-logo"></div>
    <div class="position-loading"></div>
    <p>定位中</p>
</div>
</body>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="./public/lib/jquery-2.2.3.js"></script>

<script type="text/javascript">
        $.ajax({
            type: "get",
            url: "http://h5.yztctech.net/api/axf/apimiaosha.php",
            async: true,
            success: function(){
                setTimeout(function(){
                    location.href = "index.php";
                }, 3000);
            },
        });

        wx.config({
            debug: true, // 开启调试功能，如果为true每进行一次操作都会弹出
            appId: '<?php echo $signPackage["appId"];?>', // 必填，公众号的唯一标识(字符串)
            timestamp: <?php echo $signPackage["timestamp"];?>, // 必填，生成签名的时间戳(数字)
            nonceStr: '<?php echo $signPackage["nonceStr"];?>', // 必填，生成签名的随机串(字符串)
            signature: '<?php echo $signPackage["signature"];?>',// 必填，签名，见附录1(字符串)
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'onVoicePlayEnd',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });

	wx.ready(function(){
        wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                console.log(latitude+longitude);

                /*
                 * 打开地图
                 wx.openLocation({
                    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
                    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
                    name: '育知同创', // 位置名
                    address: '七星创意工厂', // 地址详情说明
                    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                });*/
            }
        });
	});
</script>
<script type="text/javascript" src="./public/lib/flexible.js"></script>
</html>