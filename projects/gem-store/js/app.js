(function(){
    var app = angular.module('store', [ ]);
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


    // Store controller
    app.controller('StoreController', function() {
        // Product is a property of our controller, that lets help us interact with HTML
        this.products = gems;
    });

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
        }
    })

    // Our gems
    var gems = [
        {
            name : "Dodecahedron",
            price : 2.85,
            specifications : "Huge gem, dodecahedron, cool grey color",
            description : "Huge gem, low price",
            canPurchase : true,
            soldOut : false,
            images : [
                'assets/dodecahedron.png'
            ],
            reviews : [
                {
                    stars : 5,
                    body : "This gem is freaking awesome",
                    author : "Claudio Ludovico"
                }
            ]
        },
        {
            name : "Pentagonal Gem",
            price : 5.85,
            specifications : "Huge gem, pentagonal, cool yellow color",
            description : "Huge gem, high price",
            canPurchase : true,
            soldOut : false,
            images : [
                'assets/pentagonal.jpg'
            ],
            reviews : [
                {
                    stars : 5,
                    body : "This gem is freaking awesome",
                    author : "Claudio Ludovico"
                }
            ]
        }
    ]

})();
