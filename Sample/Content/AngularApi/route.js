//app.config(function ($routeProvider) {

//    $routeProvider.when("/Start", {
//        templateUrl: "/Home/Contact",
//        controller: "GetController"
//    })
//        .otherwise("/Start");


  
//});
angular.module("MyApp").config(function ($routeProvider) {

    $routeProvider.when("/Start", {
        templateUrl: "/Home/Contact",
        controller: "GetController"
    }
    )
        .otherwise("/Start");



});