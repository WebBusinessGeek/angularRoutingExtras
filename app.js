var app = angular.module('app', ['ngRoute'])


app.controller('routeParameterExample', function($scope, $routeParams){

})


app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			template: 'this is the homepage'
		})
		.when('/not', {
			template: 'this is not the homepage'
		});

})