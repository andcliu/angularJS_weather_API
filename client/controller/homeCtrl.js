weatherApp.controller('homeCtrl',['$scope', 'cityService', function($scope,cityService) {
	$scope.city = cityService.city;

	// watch this value bc it might bc it's bound to a text box

	$scope.$watch('city', function(){
		// watching city
		// when it changes cityService will update to value of $scope
		cityService.city = $scope.city;
	});
}]);