
(function(){
  let WelcomeController = function functionName($scope) {
    $scope.title = 'Welcome Controller';

  };

  let Config = function functionName($routeProvider) {
      $routeProvider.when('/welcome', {
        templateUrl: 'app/templates/welcome.html',
        controller: WelcomeController
    })
  };

  angular
    .module('welcome.module', ['ngMaterial', 'ngRoute'])
    .config(Config)
    .controller('WelcomeController', ['$scope',WelcomeController])
})();
