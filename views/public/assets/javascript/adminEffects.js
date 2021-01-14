"use strict";
var count = 0;
var effects = /** @class */ (function () {
    function effects() {
        this.handleClick();
    }
    effects.prototype.handleClick = function () {
        var _this = this;
        var dataToggle = $('[data-toggle]');
        dataToggle.each(function (index, element) {
            $(element).on('click', function (event) {
                var target = $(event.target);
                _this.effectToggleInfoUsers(target);
                _this.effectToggleDisplay(target);
                _this.effectClickButton(target);
                _this.effectToggleFixed(target);
            });
        });
        this.effectShowFormUpdate();
    };
    effects.prototype.effectClickButton = function (target) {
        target.toggleClass('admin__button-more--active');
    };
    effects.prototype.effectToggleInfoUsers = function (target) {
        var id = target.attr('data-toggle');
        $(id).toggleClass('admin__users-today-info--active');
    };
    effects.prototype.effectToggleDisplay = function (target) {
        var id = target.attr('data-display');
        $(id).toggleClass('admin__users-today-info-controls--active');
    };
    effects.prototype.effectToggleFixed = function (target) {
        var _class = $(target).attr('data-enable');
        var button1 = $(target).attr('data-enable-button-1');
        var button2 = $(target).attr('data-enable-button-2');
        $(_class).on('click', function (_a) {
            var target = _a.target;
            var parent = $(target).parent().parent();
            parent.toggleClass('admin__users-today-info-dad--fixed');
        });
        $(button1).on("click", function () {
            var id = $(button1).attr('data-list');
            $(id + " .admin__user-today").removeClass("admin__user-today--inline");
            $(id + " .admin__user-today").addClass("admin__user-today--list");
        });
        $(button2).on("click", function () {
            var id = $(button1).attr('data-list');
            $(id + " .admin__user-today").removeClass("admin__user-today--list");
            $(id + " .admin__user-today").addClass("admin__user-today--inline");
        });
    };
    effects.prototype.effectShowFormUpdate = function () {
        $('.button--fadeout').each(function (i, element) {
            $(element).on('click', function (_a) {
                var target = _a.target;
                var id = $(target).attr('close');
                $('.form__confirm-send').removeClass('form__confirm-send--show');
                $(id).removeClass('admin__fixed-form-update--show');
            });
        });
        $('#red-send').on('click', function (_a) {
            var target = _a.target;
            var nextElement = $(target).siblings()[0];
            $(nextElement).addClass('form__confirm-send--show');
        });
        $('#green-send').on('click', function (_a) {
            var target = _a.target;
            var nextElement = $(target).siblings()[0];
            $(nextElement).addClass('form__confirm-send--show');
        });
        $('#blue-send').on('click', function (_a) {
            var target = _a.target;
            var nextElement = $(target).siblings()[0];
            $(nextElement).addClass('form__confirm-send--show');
        });
    };
    return effects;
}());
new effects();
