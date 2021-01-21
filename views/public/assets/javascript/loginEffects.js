"use strict";
var loginEffects = /** @class */ (function () {
    function loginEffects() {
        this.activeCircleN();
        this.activeCircleNN();
    }
    loginEffects.prototype.activeCircleN = function () {
        var circleN = document.querySelector('#circleN');
        setTimeout(function () {
            circleN === null || circleN === void 0 ? void 0 : circleN.classList.add('background-bg__circle--active');
        }, 1000);
    };
    loginEffects.prototype.activeCircleNN = function () {
        var circleNN = document.querySelector('#circleNN');
        setTimeout(function () {
            circleNN === null || circleNN === void 0 ? void 0 : circleNN.classList.add('background-bg__circle--active');
        }, 3000);
    };
    return loginEffects;
}());
new loginEffects();
