app.service('angularService', function ($http, $q) {

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