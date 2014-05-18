(function(){
    // Our main application has dependencies
    var app = angular.module('store', ['products']);

    // Store controller
    // By using dependencies injection we ensure that StoreControll can handle $http service
    app.controller('StoreController', [ '$http', function($http) {
        var store = this;
        // Product is a property of our controller, that lets help us interact with HTML
        store.products = [];
        // In order to fetch our json file of gems we're using the $http service by angular, think of if like $.ajax() from jQuery... but
        // Better
        var request = $http ({
            method: 'GET',
            url: 'data/product.json'
        });
        request.success(function(data){
            store.products = data;
        });
    }]);

    /* We have moved this inside the directive
    app.controller('PanelController', function() {
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
    });*/

    // Controller for our reviews form
    app.controller('ReviewController', function() {
        // Initialize the review variable used in view
        this.review = {};
        // Save the brand new review
        this.addReview = function(product) {
            // With some angularJS magic this push to the currenct product
            product.reviews.push(this.review);
            // reset the form
            this.review = {};
        };
    });

})();
