/**
 * Created by 邹朋位 on 2017/3/9.
 */


app.controller("homeCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.data = [];

    $http.get("http://1.zpwsz.applinzi.com/todayHeadline/news.php?type=top")
        .success(function (req) {
            console.log(req);
            $scope.data = req.data;
            console.log("*******" + $scope.data);
        })
}]);