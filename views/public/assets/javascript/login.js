"use strict";
var logIn = /** @class */ (function () {
    function logIn() {
        this.Email();
        this.Password();
    }
    logIn.prototype.isValid = function (formInputValue) {
        if (formInputValue.match(/[a-zA-Z]/g) && formInputValue)
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
            url: 'http://localhost/projetos/linguagens/PHP_api-rest/params/ajax/login',
            success: function (_a) {
                var datas = _a.datas;
                console.log(datas);
            },
        });
    };
    return logIn;
}());
new logIn();
