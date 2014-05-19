(function(){
    'use strict';
    // Init the module
    var app = angular.module('todo', []);

    // Global tasks
    var tasks = [];

    /**
    * TestController
    * @description Check if localStorage is available
    **/
    app.controller('TestController', function() {
        this.supportStorage = function() {
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        };
    });

    /**
    * UserController
    * @description Handle the basic function for the user
    **/
    app.controller('UserController', function($scope) {
        // Actions that can be done by the user
        $scope.action = 0; // None taken 1 for add todo 2 for delete all
        // Initialize the user data
        if( localStorage['todo.user.enable'] == "true") {
            $scope.data = {
                name : localStorage['todo.user.name'],
                enable : localStorage['todo.user.enable']
            }
        }  else {
             $scope.data = {
                name : 'guest_1234',
                enable : false
            };
        }
        $scope.updateUser = function() {
            // Update the user's name
            $scope.data.name = this.data.name;
            // Enable the user
            $scope.data.enable = true;
            // Update localStorage
            localStorage['todo.user.name'] = this.data.name;
            localStorage['todo.user.enable'] = true;
        };
        // Set the current action
        $scope.setAction = function(action) {
            $scope.action = action;
        };
        // Check the current action
        $scope.getAction = function(action) {
            return  $scope.action === action;
        };
        // Delete all todos
        $scope.cleanUp = function() {
            localStorage['todo.tasks'] = [];
            tasks = [];
            alert("Todos deleted!");
        };
        // Save current Task
        $scope.newTask = function() {
            var newTask = { 'description': $scope.task.description, 'done': false, 'created_at': Date.now(), 'updated_at': Date.now() };
        };
    });

    /**
    * TodoController
    * @Handler the todo tab
    **/
    app.controller('TodoController', function($scope) {
        // Initialize the empty array for tasks
        if(localStorage['todo.tasks']) {
            console.log("Resumed your tasks");
            tasks.push(localStorage['todo.tasks']);
        } else {
            console.log("Init new tasks object");
            localStorage['todo.tasks'] = JSON.stringify( [] );
            tasks = localStorage['todo.tasks'];
        }
        // Grab all the tasks
        $scope.tasks = JSON.parse(tasks);
    });

})();
