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
});


websiteControllers.controller('aboutController', function($scope, $mdSidenav){
	var shortHtml = ""

	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};

	$scope.html = function(){};
});


websiteControllers.controller('projectsController', function($scope, $mdSidenav, $http, $filter){
	$scope.openLeftMenu = function(){
		$mdSidenav('left').toggle();
	};
	$scope.callOpenLeftMenu = function(){
		openLeftMenu();
	};

	$http({
		url: 'https://api.github.com/users/jholbrook7115/repos',
		method: 'GET'
	}).then(function(response){
		$scope.status = response.status;
		$scope.data = response.data;
	}), function(response){
		$scope.data = response.data || "Request Failed";
		$scope.response = response.status;
	}
        $scope.predicate = 'name';
        $scope.reverse = false;
        $scope.order = function(predicate, shouldReverse){
            $scope.predicate = predicate;
            if(shouldReverse !== 'no'){
                $scope.reverse = true;
            } else {
                $scope.reverse = false;
            }
        };

        // $scope.searchText = element(by.model('searchText'));
        // $scope.search = function(element){
        	
        // 	return element.name.match($searchText);
        //     //var found = $filter(search_text)($scope.data
        // };
});

websiteControllers.controller('contactController', function($scope, $mdSidenav){

	$scope.contactInfo = {
		name: 'Jefferson Holbrook',
		phone: '484-639-2039',
		email: 'holbrook.jefferson@gmail.com',
		github: 'github.com/jholbrook7115',
		linkedin: ''
	}
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
