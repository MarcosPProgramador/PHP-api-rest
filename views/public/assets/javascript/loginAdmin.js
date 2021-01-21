"use strict";
var loginAdmin = /** @class */ (function () {
    function loginAdmin() {
        this.changeInputEmail();
        this.changeInputPassword();
        this.changeInputSubmit();
        this.RegExpEmail = /^([a-z0-9-_.]{3,30})(@)([a-z]{3,30})(\.)([a-z]{2,4})((\.)([a-z]{2}))?$/i;
        this.RegExpPassword = /^([a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9!@#$%&*-_.]){10,30}$/i;
    }
    loginAdmin.prototype.changeInputEmail = function () {
        var _this = this;
        var formloginAdminEmail = _('#formloginAdmin-email');
        formloginAdminEmail.Event('focus', function () {
            formloginAdminEmail.Event('keyup', function (_a) {
                var target = _a.target;
                var formloginAdminEmailValue = target.value;
                _this.checkFields('email', formloginAdminEmailValue);
            });
        });
    };
    loginAdmin.prototype.changeInputPassword = function () {
        var _this = this;
        var formloginAdminPassword = _('#formloginAdmin-password');
        formloginAdminPassword.Event('focus', function () {
            formloginAdminPassword.Event('keyup', function (_a) {
                var target = _a.target;
                var formloginAdminPasswordValue = target.value;
                _this.checkFields('password', formloginAdminPasswordValue);
            });
        });
    };
    loginAdmin.prototype.changeInputSubmit = function () {
        var _this = this;
        var formloginAdminSubmit = _('#formloginAdmin-submit');
        formloginAdminSubmit.Event('click', function (e) {
            e.preventDefault();
            var formloginAdminPasswordValue = (document.querySelector('#formloginAdmin-password')).value;
            var formloginAdminEmailValue = (document.querySelector('#formloginAdmin-email')).value;
            if (formloginAdminPasswordValue.match(_this.RegExpPassword) &&
                formloginAdminEmailValue.match(_this.RegExpEmail)) {
                _this.requestAjaxSendPost(formloginAdminEmailValue, formloginAdminPasswordValue);
            }
        });
    };
    loginAdmin.prototype.checkFields = function (input, value) {
        switch (input) {
            case 'email':
                var emailErrorMessage = _('#emailErrorMessage');
                var emailSuccessMessage = _('#emailSuccessMessage');
                emailErrorMessage.Content('');
                emailSuccessMessage.Content('');
                if (value.match(this.RegExpEmail)) {
                    emailSuccessMessage.Content('Success');
                }
                else {
                    emailErrorMessage.Content('Falta alguma coisa :(');
                }
                break;
            case 'password':
                var passwordErrorMessage = _('#passwordErrorMessage');
                var passwordSuccessMessage = _('#passwordSuccessMessage');
                passwordSuccessMessage.Content('');
                passwordErrorMessage.Content('');
                if (value.length < 10) {
                    passwordErrorMessage.Content('Essa senha é muito curta');
                    return;
                }
                if (value.length > 30) {
                    passwordErrorMessage.Content('Essa senha é muito grande');
                    return;
                }
                if (value.match(this.RegExpPassword)) {
                    passwordSuccessMessage.Content('Success');
                }
                else {
                    passwordErrorMessage.Content('Error');
                }
                break;
        }
    };
    loginAdmin.prototype.requestAjaxSendPost = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var email = inputs[0], password = inputs[1];
        __.ajax({
            method: 'post',
            url: 'http://localhost/projetos/linguagens/PHP_api-rest/controller/ajax/loginadmin',
            dataType: 'json',
            data: { email: email, password: password },
            success: function (datas) {
                var passwordErrorMessage = _('#passwordErrorMessage');
                var passwordSuccessMessage = _('#passwordSuccessMessage');
                var emailErrorMessage = _('#emailErrorMessage');
                var emailSuccessMessage = _('#emailSuccessMessage');
                emailErrorMessage.Content('');
                passwordErrorMessage.Content('');
                if (!datas.statusSuccess) {
                    if (datas.messageEmail) {
                        emailSuccessMessage.Content('');
                        emailErrorMessage.Content(datas.messageEmail);
                    }
                    else {
                        passwordSuccessMessage.Content('');
                        passwordErrorMessage.Content(datas.messagePassword);
                    }
                }
                else {
                    location.href =
                        'http://localhost/projetos/linguagens/PHP_api-rest/Admin';
                }
            },
        });
    };
    return loginAdmin;
}());
new loginAdmin();
