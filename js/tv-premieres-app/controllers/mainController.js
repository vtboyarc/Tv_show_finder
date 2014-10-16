app.controller("mainController", function($scope, $http){

        $scope.apiKey = "[e31e3f215d2348b6a67f8fd53449ea99]";
        $scope.init = function() {
            //API requires a start date
            var today = new Date();
            //Create the date string and ensure leading zeros if required
            var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
            $http.jsonp('http://api.trakt.tv/calendar/premieres.json $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
                console.log(data);
            }).error(function(error) {

            });
        };

    });