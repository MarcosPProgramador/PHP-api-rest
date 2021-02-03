"use strict";
var productsEffects = /** @class */ (function () {
    function productsEffects() {
        this.hoverProduct();
        this.showSidebar();
        this.hideSidebar();
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
    productsEffects.prototype.showSidebar = function () {
        var buttonsOpen = document.querySelectorAll('[btnopen]');
        buttonsOpen.forEach(function (button) {
            _(button).Event('click', function (_a) {
                var target = _a.target;
                var id = target.getAttribute('data-target');
                var sidebarBox = document.getElementById(id);
                sidebarBox === null || sidebarBox === void 0 ? void 0 : sidebarBox.classList.add('gallery__sidebar-box--active');
            });
        });
    };
    productsEffects.prototype.hideSidebar = function () {
        var buttonsClose = document.querySelectorAll('[btnclose]');
        buttonsClose.forEach(function (button) {
            _(button).Event('click', function (_a) {
                var target = _a.target;
                var id = target.getAttribute('data-target');
                var sidebarBox = document.getElementById(id);
                sidebarBox === null || sidebarBox === void 0 ? void 0 : sidebarBox.classList.remove('gallery__sidebar-box--active');
            });
        });
    };
    productsEffects.prototype.buttonToggleProducts = function (id) {
        var buttons = document.querySelectorAll(id);
        buttons.forEach(function (button) {
            _(button).Event('click', function (_a) {
                var target = _a.target;
                var icon_1 = target.querySelectorAll('i')[0];
                var icon_2 = target.querySelectorAll('i')[1];
                var styleExistsIcon_1 = icon_1.getAttribute('style');
                if (styleExistsIcon_1) {
                    icon_1.removeAttribute('style');
                    _(icon_2).css({ display: 'none' });
                }
                else {
                    icon_2.removeAttribute('style');
                    _(icon_1).css({ display: 'none' });
                }
            });
        });
    };
    return productsEffects;
}());
var productsEffectsEnd = /** @class */ (function () {
    function productsEffectsEnd() {
        this.buttonToggleProducts();
    }
    productsEffectsEnd.prototype.buttonToggleProducts = function () {
        var buttons = document.querySelectorAll('[btntoggle]');
        buttons.forEach(function (button) {
            _(button).Event('click', function (_a) {
                var target = _a.target;
                var icon_1 = target.querySelectorAll('i')[0];
                var icon_2 = target.querySelectorAll('i')[1];
                var styleExistsIcon_1 = icon_1.getAttribute('style');
                if (styleExistsIcon_1) {
                    icon_1.removeAttribute('style');
                    _(icon_2).css({ display: 'none' });
                }
                else {
                    icon_2.removeAttribute('style');
                    _(icon_1).css({ display: 'none' });
                }
            });
        });
    };
    return productsEffectsEnd;
}());
