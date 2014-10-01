var app = angular.module('app', ['ngRoute'])


app.controller('routeParameterExample', function($scope, $routeParams){
	$scope.message = $routeParams.first;
	$scope.message2 = $routeParams.second;

	console.log($routeParams);
})


app.config(function($routeProvider){
	$routeProvider
		.when('/:first/:second', {
			templateUrl: 'view.html',
			controller: 'routeParameterExample'
		});


});