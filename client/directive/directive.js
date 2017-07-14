
weatherApp.directive('weatherReport', function(){
	return{
		// restrict it to only an html element
		restrict: 'E',
		templateUrl: 'directive/weatherReport.html',
		replace: true,
		// isolating the scope on directive
		scope: {
			// an object not just text you put = to bind an object
			weatherDay: "=",
			// function is &
			convertToStandard: "&",
			convertToDate: "&",
			// string is @
			dateFormat: "@"
		}
	}
});