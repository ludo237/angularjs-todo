(function(){
    // Init the module
    var app = angular.module('todo', []);

    /**
    * TodoController
    * @dependencies  $http
    **/
    app.controller('TodoController', [ '$http', function($http) {
        // Cache this attribute to use is with $http
        var todo = this;
        // Initialize the empty array for tasks
        todo.tasks = [];
        // fetch tasks from our storage
        $http.get('data/tasks.json').success(function(data) {
            todo.tasks = data;
        });
    }]);

})();
