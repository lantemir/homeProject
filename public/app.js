var app = angular.module('homeProjectApp',[
	'ui.router',
	'ngCookies'
]).config(routerConfig);

routerConfig.$inject = [
'$stateProvider', //для новых стр
'$locationProvider',
'$urlRouterProvider'];

function routerConfig($stateProvider,$locationProvider,$urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: '/views/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'vm'
		})
}		