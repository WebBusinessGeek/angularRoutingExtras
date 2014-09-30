var app = angular.module('app', ['ngRoute'])


app.controller('routeParameterExample', function($scope, $routeParams){
	console.log($routeParams);
})


app.config(function($routeProvider){
	$routeProvider
		.when('/:this/:that', {
			templateUrl: 'view.html',
			controller: 'routeParameterExample'
		});

});