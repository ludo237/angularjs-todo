(function(){
    // Init the module
    var app = angular.module('todo', []);

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
