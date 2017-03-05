<?php
require_once("jssdk.php");
$jssdk = new jssdk("wx3b5019935778a513", "1c1f5abeb6512a79080aefc2bc076537");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">

    <link rel="stylesheet" href="./public/css/reset.css">
    <link rel="stylesheet" href="./public/css/footer.css">
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./public/css/swiper-3.3.1.min.css">

    <title>爱鲜蜂</title>
</head>

<body>
    <div id="content"></div>

    <footer>
        <ul>
            <li>
                <a href="#home">
                    <figure>
                        <img src="./public/img/home.png" alt="">
                        <figcaption>首页</figcaption>
                    </figure>
                </a>
            </li>

            <li>
                <a href="#market">
                    <figure>
                        <img src="./public/img/foudre.png" alt="">
                        <figcaption>闪送超市</figcaption>
                    </figure>
                </a>
            </li>

            <li>
                <a href="#fresh">
                    <figure>
                        <img src="./public/img/order.png" alt="">
                        <figcaption>新鲜预订</figcaption>
                    </figure>
                </a>
            </li>

            <li>
                <a href="#shopCar">
                    <figure>
                        <img src="./public/img/shop.png" alt="">
                        <figcaption>购物车</figcaption>
                    </figure>
                </a>
                <span class="totalNum"></span>
            </li>

            <li>
                <a href="#personal">
                    <figure>
                        <img src="./public/img/my.png" alt="">
                        <figcaption>我的</figcaption>
                    </figure>
                </a>
            </li>

        </ul>
    </footer>

    <script charset="utf-8" src="http://api.map.baidu.com/api?v=2.0&ak=7ddQqdOKgdhyfZ6DOm7AQdpUHsW2uvQE"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>

    <script>
        wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: '<?php echo $signPackage["appId"];?>', // 必填，公众号的唯一标识
                timestamp: <?php echo $signPackage["timestamp"];?>, // 必填，生成签名的时间戳
                nonceStr: '<?php echo $signPackage["nonceStr"];?>', // 必填，生成签名的随机串
                signature: '<?php echo $signPackage["signature"];?>',// 必填，签名，见附录1
                jsApiList: ['scanQRCode','getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

    </script>

    <script src="public/lib/require.js" data-main="main"></script>

</body>

</html>