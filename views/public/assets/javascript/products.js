"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function put(rsc, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
        var resource, _a, endpoint, body, response, datas;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resource = rsc.toLowerCase();
                    _a = resource.split('?'), endpoint = _a[0], body = _a[1];
                    return [4 /*yield*/, fetch("http://localhost/projetos/linguagens/PHP_api-rest" + endpoint, {
                            method: 'PUT',
                            body: body,
                            mode: 'cors',
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    datas = _b.sent();
                    callbackFn(datas);
                    return [2 /*return*/];
            }
        });
    });
}
put("/api/usersmoney?value=0", function (json) {
    var money = document.querySelector('#money');
    money.textContent = String(json.datas.value);
});
_('#addmoney').Event('click', function (_a) {
    var target = _a.target;
    var idmoney = target.getAttribute('data-money');
    var money = document.querySelector(idmoney);
    console.log('carregando...');
    put("/api/usersmoney?value=200", function (json) {
        money.textContent = String(json.datas.value);
    });
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
        datas.map(function (data, i) {
            _('#products')
                .Child({
                Index: i,
                Element: 'div',
                Class: 'items__around',
                Attribute: [{ Key: 'data-target', Value: String(data.id) }],
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
                Parent: '.items__product-datas',
            })
                .Child({
                Element: 'div',
                Class: 'items__product-controls',
                Parent: '.items__data-info',
            })
                .Child({
                Element: 'button',
                Class: ['items__product-animate', 'a3', 'items__product-create'],
                Parent: '.items__product-controls',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-plus'],
                Parent: '.items__product-create',
            })
                .Child({
                Element: 'button',
                Class: ['items__product-animate', 'a4', 'items__product-buy'],
                Parent: '.items__product-controls',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-bookmark'],
                Parent: '.items__product-buy',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-bookmark-o'],
                Parent: '.items__product-buy',
            })
                .Child({
                Element: 'button',
                Class: ['items__product-animate', 'a5', 'items__product-favorite'],
                Parent: '.items__product-controls',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-heart'],
                Parent: '.items__product-favorite',
            })
                .Child({
                Element: 'i',
                Class: ['fa', 'fa-heart-o'],
                Parent: '.items__product-favorite',
            });
        });
        new productsEffects();
        $('#loadmore').on('click', function () {
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
                    datas.map(function (data, i) {
                        _('#products')
                            .Child({
                            Index: i + items,
                            Element: 'div',
                            Class: ['items__around', 'items__around--active'],
                            Attribute: [{ Key: 'data-target', Value: String(data.id) }],
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
                            Class: ['items__product-animate', 'a4', 'items__product-buy'],
                            Parent: '.items__product-controls',
                        })
                            .Child({
                            Element: 'i',
                            Class: ['fa', 'fa-bookmark'],
                            Parent: '.items__product-buy',
                        })
                            .Child({
                            Element: 'i',
                            Class: ['fa', 'fa-bookmark-o'],
                            Parent: '.items__product-buy',
                        })
                            .Child({
                            Element: 'button',
                            Class: [
                                'items__product-animate',
                                'a5',
                                'items__product-favorite',
                            ],
                            Parent: '.items__product-controls',
                        })
                            .Child({
                            Element: 'i',
                            Class: ['fa', 'fa-heart'],
                            Parent: '.items__product-favorite',
                        })
                            .Child({
                            Element: 'i',
                            Class: ['fa', 'fa-heart-o'],
                            Parent: '.items__product-favorite',
                        });
                    });
                },
            });
        });
    },
});
