"use strict";
var signUpEffects = /** @class */ (function () {
    function signUpEffects() {
        this.checkFields();
    }
    signUpEffects.prototype.checkContentInFormMessage = function () {
        var formMessages = document.querySelectorAll('.form__message');
        formMessages.forEach(function (element) {
            var dataBox = element.getAttribute('data-box');
            var elm = document.querySelector(dataBox);
            if (element.textContent) {
                elm === null || elm === void 0 ? void 0 : elm.classList.add('form__box--error');
            }
            else {
                elm === null || elm === void 0 ? void 0 : elm.classList.remove('form__box--error');
            }
        });
    };
    signUpEffects.prototype.checkFields = function () {
        var _this = this;
        var boxes = document.querySelectorAll('.form__box-focus');
        boxes.forEach(function (box) {
            var checkField = function (_a) {
                var target = _a.target;
                var boxValue = target.value;
                var value = target.getAttribute('id');
                var messageField = (document.querySelector("[data-box=\"#" + value + "\"]"));
                if (!boxValue) {
                    _(messageField).Content('Campo está vazio');
                    _this.checkContentInFormMessage();
                }
                else {
                    _(messageField).Content('');
                    _this.checkContentInFormMessage();
                    switch (value) {
                        case 'signup-firstname':
                            var isfirstname = boxValue.match(/^[A-Záéíóúâêîôûãõàèìòùç]{2,50}$/i);
                            if (!isfirstname) {
                                _(messageField).Content('Nome inválido');
                                _this.checkContentInFormMessage();
                            }
                            break;
                        case 'signup-lastname':
                            var islastname = boxValue.match(/^[A-Záéíóúâêîôûãõàèìòùç]{2,50}$/i);
                            if (!islastname) {
                                _(messageField).Content('Sobrenome inválido');
                                _this.checkContentInFormMessage();
                            }
                            break;
                        case 'signup-email':
                            var isemail = boxValue.match(/^([A-Z0-9-_.]{3,30})(\@)([A-Z]{3,20})(\.)([A-Z]{2,4})((\.)([A-Z]{2}))?$/i);
                            if (!isemail) {
                                _(messageField).Content('E-mail inválido');
                                _this.checkContentInFormMessage();
                            }
                            break;
                        case 'signup-password':
                            var ispassword = boxValue.match(/^([A-Z0-9-_.]{10,30})$/i);
                            if (boxValue.length < 10) {
                                _(messageField).Content('Senha curta');
                                _this.checkContentInFormMessage();
                                break;
                            }
                            if (!ispassword) {
                                _(messageField).Content('Senha inválida');
                                _this.checkContentInFormMessage();
                            }
                            break;
                    }
                }
            };
            _(box).Event('focus', checkField);
            _(box).Event('keyup', checkField);
        });
    };
    return signUpEffects;
}());
new signUpEffects();
