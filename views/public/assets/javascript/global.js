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
var path = 'http://localhost/projetos/linguagens/PHP_api-rest/';
function getContext(api, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
        var response, ApiRestDatas, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(api)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ApiRestDatas = _a.sent();
                    if (ApiRestDatas.status == 'error')
                        throw ApiRestDatas.datas;
                    else {
                        callbackFn(ApiRestDatas.datas);
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function _(Elm) {
    var Query = function (Element) {
        return document.querySelector(Element);
    };
    var Querys = function (Element, Index) {
        return document.querySelectorAll(Element)[Index];
    };
    var _index = 0;
    var Child = function (_a) {
        var Element = _a.Element, Index = _a.Index, Parent = _a.Parent, Class = _a.Class, Content = _a.Content, Attribute = _a.Attribute;
        _index = Index != undefined ? Index : _index;
        var _child = document.createElement(Element);
        if (Array.isArray(Class)) {
            $.map(Class, function (e) {
                _child.classList.add(e);
            });
        }
        else
            _child.classList.add(Class);
        if (Attribute) {
            $.map(Attribute, function (Atrr) {
                if (Atrr) {
                    _child.setAttribute(Atrr.Key, Atrr.Value);
                }
            });
        }
        if (Content)
            _child.textContent = Content;
        if (!Parent)
            Query(Elm).appendChild(_child);
        else
            Querys(Parent, _index).appendChild(_child);
        return { Child: Child };
    };
    return { Child: Child };
}
