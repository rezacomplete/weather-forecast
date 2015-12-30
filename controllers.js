weatherApp.controller("homeController", function($scope, $route, $resource, weatherService, $location) {
    $scope.city;
    
    $scope.$watch("city", function() {
        weatherService.city = $scope.city;
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
});

weatherApp.controller("forecastController", function($scope, $route, weatherService, $routeParams, weatherService) {
    
    $scope.city = weatherService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.convertToCelsius = function(degK) {
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
});
