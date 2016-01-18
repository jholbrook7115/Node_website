var websiteControllers = angular.module('websiteControllers', ['ngMaterial']);



websiteControllers.controller('homeController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
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
});


websiteControllers.controller('projectsController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};


});

websiteControllers.controller('contactController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};

});

websiteControllers.controller('funStuffController', function($scope, $mdSidenav){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
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