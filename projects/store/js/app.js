(function(){
    var app = angular.module('store', [ ]);

    // Store controller
    app.controller('StoreController', function() {
        // Product is a property of our controller, that lets help us interact with HTML
        this.products = gems;
    });

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
    });

    // Our gems
    var gems = [
        {
            name : "Dodecahedron",
            price : 2.85,
            description : "Huge gem, low price",
            canPurchase : true,
            soldOut : false,
            images : [
                'assets/dodecahedron.png'
            ]
        },
        {
            name : "Pentagonal Gem",
            price : 5.85,
            description : "Huge gem, high price",
            canPurchase : true,
            soldOut : false,
            images : [
                'assets/pentagonal.jpg'
            ]
        }
    ]

})();
