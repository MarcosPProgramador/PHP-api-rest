"use strict";
var productsEffects = /** @class */ (function () {
    function productsEffects() {
        this.hoverProduct();
        this.showSidebar();
        this.hideSidebar();
        this.showForm();
        this.buttonGetItems();
    }
    productsEffects.prototype.buttonGetItems = function () {
        var buttonGetFavorite = document.getElementById('button-get-favorite');
        buttonGetFavorite === null || buttonGetFavorite === void 0 ? void 0 : buttonGetFavorite.addEventListener('click', function () {
            getElementsFavoritesProducts();
        });
    };
    productsEffects.prototype.showForm = function () {
        $('.items__product-button-0').each(function (i, productButton) {
            $(productButton).on('click', function () {
                _('#register-product').css({ display: 'block' });
            });
        });
        $('.register-product--close').each(function (i, buttonClose) {
            $(buttonClose).on('click', function (e) {
                if (e.target.classList.contains('register-product--close')) {
                    e.stopPropagation();
                    _('#register-product').css({ display: 'none' });
                }
            });
        });
    };
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
    productsEffects.prototype.buttonToggleProducts = function (queryId) {
        var buttons = document.querySelectorAll(queryId);
        buttons.forEach(function (button) {
            _(button).Event('click', function (_a) {
                var _b;
                var target = _a.target;
                var icon_1 = target.querySelectorAll('i')[0];
                var icon_2 = target.querySelectorAll('i')[1];
                var styleExistsIcon_1 = icon_1.getAttribute('style');
                var parent = (target.getAttribute('data-parent'));
                var productId = (document.getElementById(parent)).getAttribute('data-target');
                if (styleExistsIcon_1) {
                    icon_1.removeAttribute('style');
                    _(icon_2).css({ display: 'none' });
                    var condition = (_b = target
                        .getAttribute('class')) === null || _b === void 0 ? void 0 : _b.split(' ')[2];
                    if (condition === 'items__product-favorite') {
                        __.ajax({
                            method: 'POST',
                            dataType: 'json',
                            data: { id: productId },
                            url: path + "api/productfavorites/",
                            success: function (response) { },
                        });
                    }
                }
                else {
                    __.ajax({
                        method: 'DELETE',
                        dataType: 'json',
                        data: { productId: productId },
                        url: path + "api/productfavorites/",
                        success: function (response) {
                        },
                    });
                    icon_2.removeAttribute('style');
                    _(icon_1).css({ display: 'none' });
                }
            });
        });
    };
    return productsEffects;
}());
