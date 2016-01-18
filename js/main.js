        
var app = angular.module( 'RootApp', [ 'ngMaterial', 'ngRoute', 'websiteControllers' ] );


	app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'homeController'
		})
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		})
		.when('/projects', {
			templateUrl: 'pages/projects.html',
			controller: 'projectsController'
		})
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		})
		.when('/fun-stuff', {
			templateUrl: 'pages/fun-stuff.html',
			controller: 'funStuffController'
		});
});

//global constants
app.constant('sidebarTopics', [{
		name: 'About Me',
		link: '/about'	
	},{
		name: 'Projects',
		link: '/projects'
	}, {
		name: 'Contact Info',
		link: '/contact'
	}, {
		name: 'Fun Stuff',
		link: '/fun-stuff'
	}]
);

app.controller('MainCtrl', ['$route', '$scope', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
}]);


//Routing configuration
// app.config(function($routeProvider){
// 	$routeProvider
// 		.when('/', {
// 			templateUrl: 'pages/home.html',
// 			controller: 'homeController'
// 		})
// 		.when('/about', {
// 			templateUrl: 'pages/about.html',
// 			controller: 'aboutController'
// 		})
// 		.when('/projects', {
// 			templateUrl: 'pages/projects.html',
// 			controller: 'projectsController'
// 		})
// 		.when('/contact', {
// 			templateUrl: 'pages/contact.html',
// 			controller: 'contactController'
// 		})
// 		.when('/fun-stuff', {
// 			templateUrl: 'pages/fun-stuff',
// 			controller: 'funStuffController'
// 		});
// });


// app.controller('AppCtrl', function($scope, $mdSidenav){
// 	//TODO:  something with angular
// 	$scope.openLeftMenu = function(){
// 		$mdSidenav('left').toggle();
// 	};

// 	$scope.sidebarTopics =[{
// 		name: 'About Me',
// 		link: '/about'	
// 	},{
// 		name: 'Projects',
// 		link: '/projects'
// 	}, {
// 		name: 'Contact Info',
// 		link: '/contact'
// 	}];


	// jQuery.githubUserRepos(username, callback){
	// 	jQuery.getJSON("http://api.github.com/users/" + username + "/repos?callback=?", callback);
	// };

	// //$scope.repositories = loadRepositories("jholbrook7115");
	// $scope.repositories = jQuery.
// });
