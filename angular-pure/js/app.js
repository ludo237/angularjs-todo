(function(){
    'use strict';
    // Init the module
    var app = angular.module('todo', ['todo.directives']);

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
    app.controller('UserController', function($scope, $window) {
        // Actions that can be done by the user
        $scope.action = 0; // None taken 1 for add todo 2 for delete all
        // Initialize the user data
        if( $window.localStorage['todo.user.enable'] == "true") {
            $scope.data = {
                name : $window.localStorage['todo.user.name'],
                enable : $window.localStorage['todo.user.enable']
            }
        }  else {
             $scope.data = {
                name : 'guest_' + Math.floor(Math.random() * (Math.floor(Math.random() * 100))) + 1,
                enable : false
            };
        }
        $scope.updateUser = function() {
            // Update the user's name
            $scope.data.name = this.data.name;
            // Enable the user
            $scope.data.enable = true;
            // Update localStorage
            $window.localStorage['todo.user.name'] = this.data.name;
            $window.localStorage['todo.user.enable'] = true;
        };
        // Delete all todos
        $scope.cleanUp = function() {
            $window.localStorage.removeItem('todo.tasks')
            tasks = [];
            $window.alert("Todos deleted!");
        };
        // Save current Task
        $scope.newTask = function(task) {
            var newTask = { 'description': this.task.description, 'done': false, 'important': false, 'created_at': Date.now(), 'updated_at': Date.now() };
            tasks.push(newTask);
            $window.localStorage.setItem('todo.tasks', JSON.stringify(tasks));
            this.task = [];
        };
        // Set the current user's action
        $scope.setAction = function(action) {
            $scope.action = action;
        };
        // Check the current user's action
        $scope.getAction = function(action) {
            return  $scope.action === action;
        };
    });

    /**
    * TodoController
    * @description Handler the todo tab
    **/
    app.controller('TodoController', function($scope, $window) {
        // Initialize the empty array for tasks
        if($window.localStorage['todo.tasks']) {
            // Resuming your tasks regitered on $window.localstorage
            var ts = JSON.parse($window.localStorage['todo.tasks']);
            // Updating global tasks variable
            tasks.push(ts);
            tasks = tasks[0];
        } else {
            // Init new $window.localstorage Object and tasks global var
            $window.localStorage['todo.tasks'] = [];
            tasks = [];
        }
        // Grab all the tasks put them in the scope
        $scope.tasks = tasks;
        // Toggle the task
        $scope.toggleDone = function(index) {
            tasks[index].done = !tasks[index].done;
            tasks[index].important = false;
            tasks[index].updated_at = Date.now();
            //(tasks[index].done == true) ? tasks[index].done = false : tasks[index].done = true;
            $window.localStorage.setItem('todo.tasks', JSON.stringify(tasks));
        };
        // Very very very similar to the "done" toggle
        $scope.toggleImportant = function(index) {
            tasks[index].important = !tasks[index].important;
            tasks[index].done = false;
            tasks[index].updated_at = Date.now();
            $window.localStorage.setItem('todo.tasks', JSON.stringify(tasks));
        };
        // Delete single task
        $scope.delete = function(index) {
            if($window.confirm("Are your sure?")) {
                tasks.splice(index,1);
                $window.localStorage.setItem('todo.tasks', JSON.stringify(tasks));
            }
        };
    });

})();
