var app = angular.module('app', ['ngRoute'])


app.controller('routeParameterExample', function($scope, $routeParams){
	$scope.message = $routeParams.first;
	$scope.message2 = $routeParams.second;

	console.log($routeParams);
})


app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/routeparam/:first/:second', {
			templateUrl: 'view.html',
			controller: 'routeParameterExample'
		})
		.when('/redirecttest/:argument', 
		{
			redirectTo: function(routeParams, path, search){
				console.log( routeParams);
				console.log('Path: ' + path);
				console.log( search);
				return '/'+routeParams.argument;
			}
		});
	$locationProvider.html5Mode(true);


});