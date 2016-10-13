angular.module('ToDoApp')
  .directive('list', function ListDirective () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/Directives/List.tmpl.html",
      controllerAs: 'list',

      controller: function (ListFactory) {
        this.messages = [];

        this.goToMessage = function (id) {
          ListFactory.goToMessage(id);
        };
        
        this.deleteMessage = function (id, index) {
          ListFactory.deleteMessage(id, index);
        };
        
        ListFactory.getMessages()
          .then( angular.bind( this, function then() {
              this.messages = ListFactory.messages;
            }) );

      },

      link: function (scope, element, attrs, ctrl) {
      }
    }
  });