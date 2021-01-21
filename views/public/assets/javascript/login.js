"use strict";
var logIn = /** @class */ (function () {
    function logIn() {
        this.Email();
        this.Password();
        this.requestAjaxSendEmailPassword();
    }
    logIn.prototype.isValid = function (formInputValue) {
        if (formInputValue.match(/[a-zA-Z0-9]/g) && formInputValue)
            return true;
        return false;
    };
    logIn.prototype.Email = function () {
        var _this = this;
        var stateEmail = '';
        var formloginEmail = (document.querySelector('#formlogin-email'));
        _(formloginEmail).Event('focus', function () {
            _(formloginEmail).Event('keyup', function (event) {
                var formloginEmailValue = (event === null || event === void 0 ? void 0 : event.target).value;
                if (formloginEmailValue != stateEmail) {
                    stateEmail = formloginEmailValue;
                    if (_this.isValid(formloginEmailValue))
                        _this.requestAjaxLoginPost(formloginEmailValue, 'email');
                }
            });
        });
    };
    logIn.prototype.Password = function () {
        var _this = this;
        var statePassword = '';
        var formloginPassword = (document.querySelector('#formlogin-password'));
        _(formloginPassword).Event('focus', function () {
            _(formloginPassword).Event('keyup', function (_a) {
                var target = _a.target;
                var formloginPasswordValue = target.value;
                if (formloginPasswordValue != statePassword) {
                    statePassword = formloginPasswordValue;
                    if (_this.isValid(formloginPasswordValue))
                        _this.requestAjaxLoginPost(formloginPasswordValue, 'password');
                }
            });
        });
    };
    logIn.prototype.requestAjaxLoginPost = function (formInputValue, input) {
        var _a;
        __.ajax({
            method: 'post',
            dataType: 'json',
            data: (_a = {}, _a[input] = formInputValue, _a),
            url: 'http://localhost/projetos/linguagens/PHP_api-rest/controller/ajax/login',
            success: function (data) {
                var emailErrorMessage = _('#emailErrorMessage');
                var passwordErrorMessage = _('#passwordErrorMessage');
                var emailSuccessMessage = _('#emailSuccessMessage');
                var passwordSuccessMessage = _('#passwordSuccessMessage');
                var message = data.message;
                var statusSuccess = data.statusSuccess;
                if (!statusSuccess) {
                    if (input == 'email') {
                        emailSuccessMessage.Content('');
                        emailErrorMessage.Content(message);
                        localStorage.removeItem('email');
                    }
                    else {
                        passwordSuccessMessage.Content('');
                        passwordErrorMessage.Content(message);
                        localStorage.removeItem('pass');
                    }
                }
                else {
                    if (input == 'email') {
                        emailErrorMessage.Content('');
                        emailSuccessMessage.Content(message);
                        localStorage.setItem('email', 'true');
                    }
                    else {
                        passwordErrorMessage.Content('');
                        passwordSuccessMessage.Content(message);
                        localStorage.setItem('pass', 'true');
                    }
                }
                var email = localStorage.getItem('email');
                var pass = localStorage.getItem('pass');
                var formloginAction = (document.querySelector('#formlogin-action'));
                if (email && pass) {
                    formloginAction.classList.remove('formlogin__submit--disabled');
                }
                else
                    formloginAction.classList.add('formlogin__submit--disabled');
            },
        });
    };
    logIn.prototype.requestAjaxSendEmailPassword = function () {
        $('#formlogin-action').on('click', function (e) {
            e.preventDefault();
            __.ajax({
                method: 'post',
                dataType: 'json',
                data: {
                    emailSend: $('#formlogin-email').val(),
                    passwordSend: $('#formlogin-password').val(),
                },
                url: 'http://localhost/projetos/linguagens/PHP_api-rest/controller/ajax/login',
                success: function (datas) {
                    if (!datas.statusSuccess) {
                        var passwordErrorMessage = (document.querySelector('#passwordErrorMessage'));
                        var passwordSuccessMessage = (document.querySelector('#passwordSuccessMessage'));
                        var formloginAction = (document.querySelector('#formlogin-action'));
                        passwordSuccessMessage.innerText = '';
                        passwordErrorMessage.innerText = datas.message;
                        formloginAction.classList.add('formlogin__submit--disabled');
                    }
                    else {
                        location.href =
                            'http://localhost/projetos/linguagens/PHP_api-rest/home';
                    }
                },
            });
        });
    };
    return logIn;
}());
new logIn();
