"use strict";
var productFavorites = path + "api/productfavorites/";
function getElementsFavoritesProducts() {
    var sidebarProductItems = document.querySelectorAll('.gallery__sidebar-product-item');
    sidebarProductItems.forEach(function (sidebarProductItem) {
        sidebarProductItem.remove();
    });
    getContext(productFavorites, function (products) {
        products.map(function (product, i) {
            _('#favorites-items')
                .Child({
                Index: i,
                Element: 'div',
                Class: 'gallery__sidebar-product-item',
                Attribute: [{ Key: 'data-favorite-id', Value: String(product.id) }],
            })
                .Child({
                Element: 'div',
                Parent: '#favorites-items .gallery__sidebar-product-item',
                Class: 'gallery__sidebar-product-name-price',
            })
                .Child({
                Element: 'div',
                Class: 'gallery__sidebar-product-name',
                Parent: '#favorites-items .gallery__sidebar-product-name-price',
                Content: product.name,
            })
                .Child({
                Element: 'div',
                Class: 'gallery__sidebar-product-price',
                Parent: '#favorites-items .gallery__sidebar-product-name-price',
                Content: product.price,
            })
                .Child({
                Element: 'div',
                Class: 'gallery__sidebar-product-trash',
                Parent: '#favorites-items .gallery__sidebar-product-item',
            })
                .Child({
                Element: 'button',
                Parent: '#favorites-items .gallery__sidebar-product-trash',
                Class: 'gallery__sidebar-button-trash',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-trash'],
                Parent: '#favorites-items .gallery__sidebar-button-trash',
            });
        });
        var buttonsTrash = document.querySelectorAll('.gallery__sidebar-button-trash');
        buttonsTrash.forEach(function (buttonTrash) {
            buttonTrash.addEventListener('click', function (_a) {
                var _b;
                var target = _a.target;
                var parent = (_b = target.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
                var productId = parent === null || parent === void 0 ? void 0 : parent.getAttribute('data-favorite-id');
                __.ajax({
                    url: path + "api/productfavorites/",
                    method: 'DELETE',
                    dataType: 'json',
                    data: { productId: productId },
                    success: function (response) {
                        var sidebarProductItems = document.querySelectorAll('.gallery__sidebar-product-item');
                        sidebarProductItems.forEach(function (sidebarProductItem) {
                            var id = sidebarProductItem.getAttribute('data-favorite-id');
                            if (response.datas.DeletedId == id) {
                                sidebarProductItem.remove();
                            }
                        });
                    },
                });
            });
        });
    });
}
getElementsFavoritesProducts();
