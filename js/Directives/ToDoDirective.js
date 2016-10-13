angular.module('ToDoApp')
  .directive('todo', function ToDoDirective ($timeout) {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: "js/Directives/ToDo.tmpl.html",
      controllerAs: 'todo',
      controller: function ($routeParams, $scope, ToDoFactory) {
        this.message = {};
        var getmessage = ToDoFactory.getMessage($routeParams);
        if (getmessage) {
          getmessage.then( angular.bind(this, function (response) {
            ToDoFactory.message = response;
            this.message = ToDoFactory.message;
            $scope.$parent.todo.title = this.message.subject;
          }) );
        }
      },
      link: function (scope, element, attrs, ctrl) {
        var textarea = element.find('.todo__response-text')[0];
        scope.$watch('reply', function (newVal, oldVal) {
          if (newVal === oldVal) return;
          if (newVal) {
            $timeout(function () {
              textarea.focus();
            }, 0);
          }
        })
      }
    }
  });