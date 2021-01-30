"use strict";
var productsEffects = /** @class */ (function () {
    function productsEffects() {
        this.hoverProduct();
    }
    productsEffects.prototype.hoverProduct = function () {
        var products = document.querySelectorAll('.items__around');
        products.forEach(function (product) {
            _(product).Event('mouseenter', function (_a) {
                var target = _a.target;
                ;
                target.classList.add('items__around--active');
            });
        });
    };
    return productsEffects;
}());
