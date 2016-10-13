angular.module('ToDoApp')
  .factory('ListFactory', function ListFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.messages = [];

    exports.goToMessage = function(id) {
      if ( angular.isNumber(id) ) {
        console.log('list/todo/' + id)
        $location.path('list/todo/' + id)
      }
    }

    exports.deleteMessage = function (id, index) {
      this.messages.splice(index, 1);
    }

    exports.getMessages = function () {
      var deferred = $q.defer();
      return $http.get('JSON/todolist.json')
        .success(function (data) {
          exports.messages = data;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return exports;
  });