var gmaps = angular.module('GMapsApp', [ 'ngMaterial', 'ngMap']);

gmaps.controller('GMapsCtrl', function($scope, $http, $location){
    
    //GMaps setup
    NgMap.getMap().then(function(map){
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    $scope.searchTxt = '';

    $scope.search = function(){
        var searchVal = $scope.searchTxt;
        //var searchURL = $location.path('/api/locations/');
        //var searchURL = $location.path() + "philadelphia"
        /*
        $http({
            url: 
        }).then(function(res){
            $scope.status = res.status;
            $scope.data = res.data;
        )}, function(res){
            $scope.status = res.status;
            $scope.data = res.data || "Request Failed";
        }
        */
    }
   
});


