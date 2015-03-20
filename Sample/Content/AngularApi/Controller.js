//app.controller('GetController', function ($scope, angularService) {
angular.module("MyApp").controller('GetController', function ($scope, angularService) {

    angularService.getData().then(function (data) {

        $scope.names = data;

    },
    function (error) { alert(error); })

});