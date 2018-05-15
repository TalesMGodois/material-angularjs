let AppController = function functionName($scope, $location) {
  $scope.title = 'Hello base App';

  $location.path('welcome');

};

let Config = function ($routeProvider) {
  
};

angular
  .module('baseApp', ['ngMaterial', 'ngRoute', 'welcome.module'])
  .config(Config)
  .controller('AppController', ['$scope','$location',AppController])
