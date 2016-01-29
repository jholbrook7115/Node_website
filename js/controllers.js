var websiteControllers = angular.module('websiteControllers', ['ngMaterial']);



websiteControllers.controller('homeController', function($scope, $mdSidenav){

	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};

	$scope.homeOptions = [{
		title: 'About Me',
		description: 'Learn more about me and who I am',
		link: '#about'
	},{
		title: 'Projects',
		description: 'See some of the projects I have worked on',
		link: '#projects'
	},{
		title: 'Contact Info',
		description: 'How to contact me',
		link: '#contact'
	},{
		title: 'Fun Stuff',
		description: 'A place for some of my experimental stuff',
		link: '#fun-stuff'
	}];

	// $scope.sidebarTopics =[{
	// 	name: 'About Me',
	// 	link: '/about'	
	// },{
	// 	name: 'Projects',
	// 	link: '/projects'
	// }, {
	// 	name: 'Contact Info',
	// 	link: '/contact'
	// }, {
	// 	name: 'Fun Stuff',
	// 	link: '/fun-stuff'
	// }];
});


websiteControllers.controller('aboutController', function($scope, $mdSidenav){
	var shortHtml = ""

	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};

	$scope.html = function(){

	}
});


websiteControllers.controller('projectsController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};

});

websiteControllers.controller('contactController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};
});

websiteControllers.controller('funStuffController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};
});

// function openLeftMenu(){
// 	$mdSideNav('left').toggle();
// }
// function mdSideNavCtrl($scope, $location, $mdSidenav) {
// 	$scope.openLeftMenu = function(){
// 		$mdSidenav('left').toggle();
// 	};
// }