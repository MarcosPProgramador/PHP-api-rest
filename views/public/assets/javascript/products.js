"use strict";
ListFirstRequest();
function ListFirstRequest() {
    __.ajax({
        method: 'get',
        dataType: 'json',
        url: path + "api/usersmoney/",
        success: function (response) {
            if (response) {
                var money = document.querySelector('#money');
                money.textContent = String(response.datas.value);
            }
        },
    });
    __.ajax({
        url: path + "api/products",
        method: 'get',
        dataType: 'json',
        beforeSend: function () {
            _('#loading').css({ display: 'flex' });
        },
        success: function (response) {
            var datas = response.datas;
            _('#loading').css({ display: 'none' });
            ListProducts(datas);
        },
    });
}
eventsRequest();
function eventsRequest() {
    _('#addmoney').Event('click', function (_a) {
        var target = _a.target;
        var idmoney = target.getAttribute('data-money');
        var money = document.querySelector(idmoney);
        __.ajax({
            method: 'PUT',
            dataType: 'json',
            url: path + "api/usersmoney/",
            success: function (response) {
                console.log(response);
                if (response) {
                    var value = String(response.datas.value).split('.');
                    if (value[1]) {
                        var n = value[0], nn = value[1];
                        var txt = n + "." + nn.slice(0, 2);
                        money.textContent = txt;
                    }
                    else {
                        var n = value[0];
                        var txt = "" + n;
                        money.textContent = txt;
                    }
                }
            },
        });
    });
    _('#loadmore').Event('click', function () {
        var items = $('.items__around').length;
        __.ajax({
            url: path + "api/products",
            method: 'post',
            data: { init: items, end: 10 },
            dataType: 'json',
            beforeSend: function () {
                _('#loading').css({ display: 'flex' });
            },
            success: function (response) {
                _('#loading').css({ display: 'none' });
                var datas = response.datas;
                var items = $('.items__around').length;
                ListProducts(datas, items);
            },
        });
    });
}
function ListProducts(datas, items) {
    var customClass = function (items) {
        return items ? 'items__around--active' : 'items__around--no';
    };
    datas.map(function (data, i) {
        _('#products')
            .Child({
            Index: i + Number("" + (items != undefined ? items : 0)),
            Element: 'div',
            Class: ['items__around', "" + customClass(items)],
            Attribute: [
                { Key: 'data-target', Value: String(data.id) },
                { Key: 'id', Value: 'product-' + String(data.id) },
            ],
        })
            .Child({
            Element: 'div',
            Class: 'items__container-img',
            Parent: '.items__around',
        })
            .Child({
            Element: 'div',
            Class: 'items__image-size',
            Parent: '.items__container-img',
        })
            .Child({
            Element: 'div',
            Class: 'items__data-info',
            Parent: '.items__around',
        })
            .Child({
            Element: 'div',
            Class: 'items__product-datas',
            Parent: '.items__data-info',
        })
            .Child({
            Element: 'div',
            Class: [
                'items__product-animate',
                'a1',
                'items__product-data',
                'items__product-name',
            ],
            Content: data.product,
            Parent: '.items__product-datas',
        })
            .Child({
            Element: 'button',
            Class: [
                'items__product-animate',
                'a2',
                'items__product-data',
                'items__product-price',
            ],
            Content: data.price,
            Attribute: [
                { Key: 'data-parent', Value: 'product-' + String(data.id) },
            ],
            Parent: '.items__product-datas',
        })
            .Child({
            Element: 'div',
            Class: 'items__product-controls',
            Parent: '.items__data-info',
        })
            .Child({
            Element: 'button',
            Class: [
                'items__product-animate',
                'a3',
                'items__product-create',
                'items__product-button-0',
            ],
            Parent: '.items__product-controls',
        })
            .Child({
            Element: 'i',
            Class: ['fa', 'fa-plus'],
            Parent: '.items__product-create',
        })
            .Child({
            Element: 'button',
            Class: [
                'items__product-animate',
                'a5',
                'items__product-favorite',
                'items__product-button-2',
            ],
            Attribute: [
                {
                    Key: "" + (items != undefined ? 'btntoggleinit' : 'btntoggle'),
                    Value: '',
                },
                { Key: 'data-parent', Value: 'product-' + String(data.id) },
            ],
            Parent: '.items__product-controls',
        })
            .Child({
            Element: 'i',
            Class: ['fa', 'fa-heart'],
            Attribute: [{ Key: 'style', Value: 'display: none;' }],
            Parent: '.items__product-favorite',
        })
            .Child({
            Element: 'i',
            Class: ['fa', 'fa-heart-o'],
            Parent: '.items__product-favorite',
        });
    });
    Alerts();
    CreateProduct();
    var classProductsEffects = new productsEffects();
    if (items) {
        classProductsEffects.buttonToggleProducts('[btntoggleinit]');
    }
    else {
        classProductsEffects.buttonToggleProducts('[btntoggle]');
    }
}
function removeAlert() {
    var alerts = document.querySelectorAll('.alert');
    alerts.forEach(function (alert) {
        alert.remove();
    });
}
function Alerts() {
    var prices = document.querySelectorAll('.items__product-data.items__product-price');
    prices.forEach(function (price) {
        _(price).Event('click', function (_a) {
            var target = _a.target;
            var parentId = (target.getAttribute('data-parent'));
            removeAlert();
            _("#" + parentId + " .items__image-size")
                .Child({
                Element: 'div',
                Class: 'alert',
            })
                // container
                .Child({
                Element: 'div',
                Class: 'alert__container',
                Parent: '.alert',
            })
                // top
                .Child({
                Element: 'div',
                Class: 'alert__container-top',
                Parent: '.alert__container',
            })
                .Child({
                Element: 'h2',
                Class: 'alert__title',
                Parent: '.alert__container-top',
                Content: 'Really want to buy this product?',
            })
                // bottom
                .Child({
                Element: 'div',
                Class: 'alert__container-bottom',
                Parent: '.alert__container',
            })
                .Child({
                Element: 'button',
                Class: ['alert__button', 'alert__button-01'],
                Attribute: [{ Key: 'data-parent', Value: parentId }],
                Parent: '.alert__container-bottom',
                Content: 'Yes',
            })
                .Child({
                Element: 'button',
                Class: ['alert__button', 'alert__button-02'],
                Parent: '.alert__container-bottom',
                Content: 'No',
            });
            $('.alert__button-01').each(function (i, button) {
                $(button).on('click', function (_a) {
                    var target = _a.target;
                    var parentid = $(target).attr('data-parent');
                    var parent = document.querySelector("#" + parentid);
                    var targetid = parent.getAttribute('data-target');
                    __.ajax({
                        method: 'POST',
                        dataType: 'json',
                        data: { id: targetid },
                        url: path + "api/productpurchased",
                        success: function (response) {
                            var money = document.getElementById('money');
                            if (response) {
                                var price_1 = String(response.datas.price).split('.');
                                if (price_1[1]) {
                                    var n = price_1[0], nn = price_1[1];
                                    var txt = n + "." + nn.slice(0, 2);
                                    money.textContent = txt;
                                }
                                else {
                                    if (response.datas.price) {
                                        var txt = "" + response.datas.price;
                                        console.log(txt);
                                        money.textContent = txt;
                                    }
                                }
                            }
                            var purchased = document.getElementById('purchased-product-animate');
                            if (!(response.datas == 'error')) {
                                purchased === null || purchased === void 0 ? void 0 : purchased.classList.remove('register-message__box--active');
                                purchased === null || purchased === void 0 ? void 0 : purchased.classList.add('register-message__box--active');
                                _('#purchased-product-animate').css({
                                    borderColor: 'var(--blue)',
                                });
                                _('#purchased-product-animate span').css({
                                    color: 'var(--blue)',
                                });
                                var children = purchased === null || purchased === void 0 ? void 0 : purchased.children[0];
                                children.textContent = 'Purchased Product';
                                var c = setTimeout(function () {
                                    purchased === null || purchased === void 0 ? void 0 : purchased.classList.remove('register-message__box--active');
                                }, 5000);
                            }
                            else {
                                purchased === null || purchased === void 0 ? void 0 : purchased.classList.remove('register-message__box--active');
                                purchased === null || purchased === void 0 ? void 0 : purchased.classList.add('register-message__box--active');
                                _('#purchased-product-animate').css({
                                    borderColor: 'red',
                                });
                                _('#purchased-product-animate span').css({
                                    color: 'red',
                                });
                                var children = purchased === null || purchased === void 0 ? void 0 : purchased.children[0];
                                children.textContent = 'You do not have money';
                                var c = setTimeout(function () {
                                    purchased === null || purchased === void 0 ? void 0 : purchased.classList.remove('register-message__box--active');
                                }, 5000);
                            }
                        },
                    });
                    removeAlert();
                });
            });
            $('.alert__button-02').each(function (i, button) {
                $(button).on('click', function () {
                    removeAlert();
                });
            });
        });
    });
}
function CreateProduct() {
    getContext(path + "api/productname", function (productsname) {
        var productSelectOptions = document.querySelectorAll('.product-select__option');
        productSelectOptions.forEach(function (productSelectOption) {
            productSelectOption.remove();
        });
        productsname.map(function (productname, i) {
            _('#product-select').Child({
                Index: i,
                Element: 'option',
                Attribute: [{ Key: 'value', Value: productname.brand_id }],
                Class: 'product-select__option',
                Content: productname.product,
            });
        });
        var productSelect = (document.getElementById('product-select'));
        requestProductbrand(productSelect.value);
        function requestProductbrand(brandId) {
            __.ajax({
                method: 'post',
                url: path + "api/productbrand",
                dataType: 'json',
                data: { brand_id: brandId },
                success: function (response) {
                    var productsBrand = response.datas;
                    var productSelectBrandOptions = document.querySelectorAll('.product-select-brand__option');
                    productSelectBrandOptions.forEach(function (productSelectBrandOption) {
                        productSelectBrandOption.remove();
                    });
                    productsBrand.map(function (productBrand, i) {
                        _('#product-select-brand').Child({
                            Element: 'option',
                            Class: 'product-select-brand__option',
                            Attribute: [{ Key: 'value', Value: String(productBrand.id) }],
                            Content: productBrand.brand,
                        });
                    });
                },
            });
        }
        productSelect.addEventListener('change', function () {
            requestProductbrand(productSelect.value);
        });
        requestInsertProduct();
        function requestInsertProduct() {
            var registerProductButtonSend = document.getElementById('register-product-button-send');
            registerProductButtonSend === null || registerProductButtonSend === void 0 ? void 0 : registerProductButtonSend.addEventListener('click', function () {
                var productSelect = document.getElementById('product-select').value;
                var productSelectBrand = document.getElementById('product-select-brand').value;
                var productPrice = document.getElementById('price').value;
                if (productPrice && !isNaN(Number(productPrice))) {
                    __.ajax({
                        method: 'post',
                        url: path + "api/products",
                        dataType: 'json',
                        data: {
                            insert: true,
                            productName: productSelect,
                            productBrand: productSelectBrand,
                            productPrice: productPrice,
                        },
                        success: function (response) {
                            var createdProductAnimate = document.getElementById('created-product-animate');
                            createdProductAnimate === null || createdProductAnimate === void 0 ? void 0 : createdProductAnimate.classList.add('register-message__box--active');
                            setTimeout(function () {
                                createdProductAnimate === null || createdProductAnimate === void 0 ? void 0 : createdProductAnimate.classList.remove('register-message__box--active');
                            }, 5000);
                            __.ajax({
                                method: 'post',
                                url: path + "api/productcreated",
                                dataType: 'json',
                                data: {
                                    name: productSelect,
                                    brand: productSelectBrand,
                                    price: productPrice,
                                },
                                success: function (response) { },
                            });
                        },
                    });
                    requestInsertCreatedProduct();
                }
                function requestInsertCreatedProduct() { }
            });
        }
    });
}
