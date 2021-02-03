"use strict";
var productCreated = 'http://localhost/projetos/linguagens/PHP_api-rest/api/productcreated/';
getContext(productCreated, function (products) {
    products.map(function (product, i) {
        _('#created-items')
            .Child({
            Index: i,
            Element: 'div',
            Class: 'gallery__sidebar-product-item',
            Attribute: [{ Key: 'data-target', Value: String(product.id) }],
        })
            .Child({
            Element: 'div',
            Parent: '.gallery__sidebar-product-item',
            Class: 'gallery__sidebar-product-name-price',
        })
            .Child({
            Element: 'div',
            Class: 'gallery__sidebar-product-name',
            Parent: '.gallery__sidebar-product-name-price',
            Content: product.name,
        })
            .Child({
            Element: 'div',
            Class: 'gallery__sidebar-product-price',
            Parent: '.gallery__sidebar-product-name-price',
            Content: product.price,
        })
            .Child({
            Element: 'div',
            Class: 'gallery__sidebar-product-trash',
            Parent: '.gallery__sidebar-product-item',
        })
            .Child({
            Element: 'button',
            Parent: '.gallery__sidebar-product-trash',
            Class: 'gallery__sidebar-button-trash',
        })
            .Child({
            Element: 'i',
            Class: ['fa', 'fa-trash'],
            Parent: '.gallery__sidebar-button-trash',
        });
    });
});
