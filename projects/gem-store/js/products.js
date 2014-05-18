(function(){
    var app = angular.module('products', [ ]);
    /*
    * Custom Directives
    */
    app.directive('productTitle', function() {
        return {
            // Directive Definition Object
            restrict : 'E', // Directive type, e stands form Element
            templateUrl : 'views/product/title.html' // Actual template
        };
    });

    app.directive('productImage', function() {
        return {
            restrict : 'E',
            templateUrl : 'views/product/image.html'
        };
    });

    app.directive('productSection', function() {
        return {
            restrict : 'E',
            templateUrl : 'views/product/section.html',
            // We need to specify the controller for our section, to keep the code clean
            controller : function() {
                // This is the equivalent of ng-init = 1
                this.tab = 1;
                // This is the equivalento of ng-click="tab = n"
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                // This is the equivalent of { active: tab == 1} for setting stuff
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            // Also the alias
            controllerAs: 'panel'
        };
    });
})();
