"use strict";
var productPurchased = path + "api/productPurchased/";
function getElementsPurchasedProducts() {
    getContext(productPurchased, function (products) {
        var productItems = document.querySelectorAll('#purchased-items .gallery__sidebar-product-item');
        productItems.forEach(function (productItem) {
            productItem.remove();
        });
        products.map(function (product, i) {
            _('#purchased-items')
                .Child({
                Index: i,
                Element: 'div',
                Class: 'gallery__sidebar-product-item',
                Attribute: [{ Key: 'data-purchased-id', Value: String(product.id) }],
            })
                .Child({
                Element: 'div',
                Parent: '#purchased-items .gallery__sidebar-product-item',
                Class: 'gallery__sidebar-product-name-price',
            })
                .Child({
                Element: 'div',
                Class: 'gallery__sidebar-product-name',
                Parent: '#purchased-items .gallery__sidebar-product-name-price',
                Content: product.name,
            })
                .Child({
                Element: 'div',
                Class: 'gallery__sidebar-product-price',
                Parent: '#purchased-items .gallery__sidebar-product-name-price',
                Content: product.price,
            })
                .Child({
                Element: 'div',
                Class: 'gallery__sidebar-product-trash',
                Parent: '#purchased-items .gallery__sidebar-product-item',
            })
                .Child({
                Element: 'button',
                Parent: '#purchased-items .gallery__sidebar-product-trash',
                Class: 'gallery__sidebar-button-trash',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-trash'],
                Parent: '#purchased-items .gallery__sidebar-button-trash',
            });
        });
        var buttonsTrash = document.querySelectorAll('.gallery__sidebar-button-trash');
        buttonsTrash.forEach(function (buttonTrash) {
            buttonTrash.addEventListener('click', function (_a) {
                var _b;
                var target = _a.target;
                var parent = (_b = target.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
                var productId = parent === null || parent === void 0 ? void 0 : parent.getAttribute('data-purchased-id');
                __.ajax({
                    url: path + "api/productpurchased/",
                    method: 'DELETE',
                    dataType: 'json',
                    data: { productId: productId },
                    success: function (response) {
                        var sidebarProductItems = document.querySelectorAll('.gallery__sidebar-product-item');
                        sidebarProductItems.forEach(function (sidebarProductItem) {
                            var id = sidebarProductItem.getAttribute('data-purchased-id');
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
_('#button-get').Event('click', function () {
    getElementsPurchasedProducts();
});
