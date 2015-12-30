weatherApp.service("weatherService", function() {
    this.city = "";
});

weatherApp.service('weatherService', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=YOUR-ID", {callback: "JSON_CALLBACK"}, {get:{method: "JSONP"}});
    
        return weatherAPI.get({q:city, cnt:days});
    }
});