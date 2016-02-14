var app = angular.module('LaserApp', [ 'ngMaterial', 'ngRoute' ] );

app.controller('laserCtrl', function($scope){
	
	$scope.colorList = [{
		color: '#ff00000'
	}, {
		color: '#0ff0000'
	}, {
		color: '#00ff000'
	},{
		color: '#000ff00'
	},{
		color: '#0000ff0'
	},{
		color: '#00000ff'
	}];

	$scope.getTimes = function(n){
		return new Array(n);
	};


});