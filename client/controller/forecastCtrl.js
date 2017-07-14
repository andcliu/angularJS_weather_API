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