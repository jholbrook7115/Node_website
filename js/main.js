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
	})
        .when('/documentation', {
                templateUrl: 'pages/documentation.html',
                controller: 'documentationController'
        })
	.otherwise({
		redirectTo: '/'
	});
});

//global constants
app.constant('sidebarObjects', [{
		name: 'About Me',
		link: '#about'
	},{
		name: 'Projects',
		link: '#projects'
	},{
		name: 'Contact Info',
		link: '#contact'
	},{
		name: 'Fun Stuff',
		link: '#fun-stuff'
	}]
);

app.controller('MainCtrl', function($scope, $mdSidenav){

	$scope.sidebarObjects = [{
		name: 'About Me',
		link: '#about',
		description: 'Information about me'
	},{
		name: 'Projects',
		link: '#projects',
		description: 'Projects I have worked on'
	}, {
		name: 'Contact Info',
		link: '#contact',
		description: 'Want to contact me?  Here\'s how!'
	}, {
		name: 'Fun Stuff',
		link: '#fun-stuff',
		description: 'Things just for fun!'
	},{
                name: 'Documentation',
                link: '#documentation',
                description: 'Documentation that I find on the internet and I want to keep track of because I found it interesting'
        }];

	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
});



	// jQuery.githubUserRepos(username, callback){
	// 	jQuery.getJSON("http://api.github.com/users/" + username + "/repos?callback=?", callback);
	// };

	// //$scope.repositories = loadRepositories("jholbrook7115");
	// $scope.repositories = jQuery.
// });
