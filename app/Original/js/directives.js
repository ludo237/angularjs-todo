(function() {
    // Init new angular module
    var app = angular.module('todo.directives', [ ]);

    app.directive('modernBrowser', function() {
        return {
            // Element restriction
            restrict: 'E',
            templateUrl: 'views/modern-browser.html'
        };
    });

    app.directive('userIntro', function() {
        return {
            restrict: 'E',
            templateUrl : 'views/user-intro.html'
        };
    });

    app.directive('userForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/user-form.html',
        };
    });

    app.directive('newTask', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/new-task.html'
        };
    });

})();
