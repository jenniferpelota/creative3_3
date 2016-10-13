angular.module('ToDoApp', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
  
  'use strict';

  $routeProvider
    .when('/list', {
      templateUrl: 'views/List.html',
      controller: 'ListControl',
      controllerAs: 'list'
    })
    .when('/list/todo/:id', {
      templateUrl: 'views/ToDo.html',
      controller: 'ToDoControl',
      controllerAs: 'todo'
    })
    .otherwise({
      redirectTo: '/list'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});