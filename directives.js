weatherApp.directive("weatherResult", function() {
    return {
        templateUrl: 'directives/weatherresult.html',
        replace:true,
        scope: {
            weatherDay: "=",
            dateFormat: "@",
            dateConverter: "&",
            temperatureConverter: "&"
        }
    }
});