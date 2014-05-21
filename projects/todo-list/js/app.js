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
            localStorage['todo.user.name'] = this.data.name;
            localStorage['todo.user.enable'] = true;
        };
        // Delete all todos
        $scope.cleanUp = function() {
            localStorage.removeItem('todo.tasks')
            tasks = [];
            alert("Todos deleted!");
        };
        // Save current Task
        $scope.newTask = function(task) {
            var newTask = { 'description': this.task.description, 'done': false, 'created_at': Date.now(), 'updated_at': Date.now() };
            tasks.push(newTask);
            console.log(tasks);
            localStorage.setItem('todo.tasks', JSON.stringify(tasks));
            this.task = [];
        };
        // Set the current action
        $scope.setAction = function(action) {
            $scope.action = action;
        };
        // Check the current action
        $scope.getAction = function(action) {
            return  $scope.action === action;
        };
    });

    /**
    * TodoController
    * @description Handler the todo tab
    **/
    app.controller('TodoController', function($scope) {
        // Initialize the empty array for tasks
        if(localStorage['todo.tasks']) {
            // Resuming your tasks regitered on localstorage
            var ts = JSON.parse(localStorage['todo.tasks']);
            // Updating global tasks variable
            tasks.push(ts);
            tasks = tasks[0];
        } else {
            // Init new localstorage Object and tasks global var
            localStorage['todo.tasks'] = [];
            tasks = [];
        }
        // Grab all the tasks put them in the scope
        $scope.tasks = tasks;
        // Toggle the task
        $scope.toggle = function(index) {
            (tasks[index].done == true) ? tasks[index].done = false : tasks[index].done = true;
            localStorage.setItem('todo.tasks', JSON.stringify(tasks));
        };
    });

})();
