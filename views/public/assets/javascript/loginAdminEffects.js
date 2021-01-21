"use strict";
var loginAdminEffects = /** @class */ (function () {
    function loginAdminEffects() {
        this.effectShowOrHidePasswordField();
    }
    loginAdminEffects.prototype.effectShowOrHidePasswordField = function () {
        var buttonEyePasswordField = _('#button-eye');
        buttonEyePasswordField.Event('click', function (_a) {
            var target = _a.target;
            var dataPassword = (target.getAttribute('data-password'));
            var formLoginPasswordField = (document.querySelector(dataPassword));
            if (formLoginPasswordField.type === 'text')
                formLoginPasswordField.type = 'password';
            else
                formLoginPasswordField.type = 'text';
        });
    };
    return loginAdminEffects;
}());
new loginAdminEffects();
