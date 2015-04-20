'use strict';

angular.module('alpha',[])
.run(['$rootScope', function($rootScope) {
  console.info('running the run function');
  $rootScope.z  =12;
}])
.controller('beta',['$scope', function($scope){
  // console.log('beat controller initialized');
  // console.warn('beat controller initialized');
  // console.error('beat controller initialized');
  console.info('beta controller initialized');
  $scope.x = 3;
  $scope.y = 2;
}])
.controller('gamma',['$scope', function($scope){
  console.info('gamma controller initialized');
  $scope.x = 5;
  $scope.y = 7;
}]);


$(document).ready(init);

function init(){

}
