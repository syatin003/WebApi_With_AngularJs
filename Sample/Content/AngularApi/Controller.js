app.controller('GetController', function ($scope, angularService) {

    angularService.getData().then(function (data) {

        $scope.names = data;

    },
    function (error) { alert(error); })

});