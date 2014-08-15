// Code goes here
var app = angular.module('myapp', ['ngLoadingSpinner']);
app.controller('MyController', function($scope, $http) {
  $scope.startAjax = function() {
    $http.get('ajax_suspend.php')
  };
});