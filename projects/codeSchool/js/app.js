(function(){
    var app = angular.module('store', [ ]);

    // Store controller
    app.controller('StoreController', function() {
        // Product is a property of our controller, that lets help us interact with HTML
        this.products = gems;
    });

    // Our gems
    var gems = [
        {
            name : "Dodecahedron",
            price : 2.85,
            description : "Huge gem, low price",
            canPurchase : false,
            soldOut : true,
        },
        {
            name : "Pentagonal Gem",
            price : 5.85,
            description : "Huge gem, high price",
            canPurchase : true,
            soldOut : false,
        }
    ]

})();
