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
// route
weatherApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl:'partials/home.htm',
		controller: 'homeCtrl'
	})

	.when('/forecast', {
		templateUrl:'partials/forecast.htm',
		controller: 'forecastCtrl'
	})

	.when('/forecast/:days', {
		templateUrl:'partials/forecast.htm',
		controller: 'forecastCtrl'
	})
});

// service 
weatherApp.service('cityService', function(){
	this.city = "Alameda, Ca";
});


// controller 
weatherApp.controller('homeCtrl',['$scope', 'cityService', function($scope,cityService) {
	$scope.city = cityService.city;

	// watch this value bc it might bc it's bound to a text box

	$scope.$watch('city', function(){
		// watching city
		// when it changes cityService will update to value of $scope
		cityService.city = $scope.city;
	});
}]);

weatherApp.controller('forecastCtrl',['$scope', '$resource', 'cityService', '$routeParams', function($scope,$resource,cityService,$routeParams) {
	$scope.city = cityService.city;

	// routeParams allow me to use /forecast/:days
	$scope.days = $routeParams.days || '7';
	$scope.weatherAPI = 
	$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=3e0c1d9c18f2f4cd16ebca7a8fe28007");

	$scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days });

	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK - 273)) + 32)
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}

}]);