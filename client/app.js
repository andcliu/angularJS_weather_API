// told my app, that i'll be using ngRoute & ngResource
// resource allows angular to go out into internet and grab data
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=3e0c1d9c18f2f4cd16ebca7a8fe28007'
  ]);
});
