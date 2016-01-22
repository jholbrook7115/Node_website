var websiteControllers = angular.module('websiteControllers', ['ngMaterial']);



websiteControllers.controller('homeController', function($scope, $mdSidenav){

	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};

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
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};
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