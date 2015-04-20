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
}])
.controller('rainbow',['$scope', function($scope){
  console.info('rainbow controller initialized');
  $scope.colors = ['blue','green','yellow'];
  // $scope.y = 7;
}])
.controller('calculator',['$scope', function($scope){
  console.info('calculator controller initialized');
  $scope.compute = function() {
    console.warn('we just clicked the green compute button');
    var result;
    var x = $scope.x;
    var y = $scope.y;

    switch($scope.op) {
      case "+":
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
    }
    $scope.result = result;
  }
}]);

$(document).ready(init);

function init(){

}
