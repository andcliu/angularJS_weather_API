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