
angular.module("MyApp").service('angularService', function ($http, $q) {

    return {
        getData: function () {
            var deferred = $q.defer();
            $http.
                get('/api/values')
                .success(function (data) {
                    deferred.resolve(data);
                }).error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }
    }
});

//angular.module("MyApp").service('angularService', angularService);
//function angularService($http, $q) {

//    return {
//        getData: getDatas
//    }

//    function getDatas() {
//        var deferred = $q.defer();
//        $http.
//            get('/api/values')
//            .success(onSuccess)
//            .error(onError)
//             };
//        return deferred.promise;

//        function onSuccess() {
//            deferred.resolve(data);

//        };
//        function onError(error) {
//            deferred.reject(error);

//        };
//};