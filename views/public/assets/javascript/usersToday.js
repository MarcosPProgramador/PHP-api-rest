"use strict";
var usersToday = /** @class */ (function () {
    function usersToday() {
        this.usersTodayString = path + "api/usersToday";
        this.requestAjaxUsersTodayGet();
    }
    usersToday.prototype.requestAjaxUsersTodayGet = function () {
        var _this = this;
        $.ajax({
            method: 'get',
            url: this.usersTodayString,
            dataType: 'json',
            success: function () {
                _this.getUsersToday();
            },
        });
    };
    usersToday.prototype.getUsersToday = function () {
        var _this_1 = this;
        getContext(this.usersTodayString, function (users) {
            var len = users.length != undefined ? users.length : 0;
            $('#count-green').text(len);
            if (Array.isArray(users)) {
                $('.admin__users-today-info-controls#green-none').removeClass('admin__users-today-info-controls--disabled');
                $('#count-green ~ .admin__button-more').removeClass('admin__button-more--disabled');
                $('#count-green').removeClass('count--disabled');
                $('.green .admin__user-today').remove();
                $.map(users, function (user, i) {
                    _('.green')
                        .Child({
                        Index: i,
                        Class: 'admin__user-today',
                        Element: 'div',
                    })
                        .Child({
                        Class: 'admin__image-name',
                        Parent: '.green .admin__user-today',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.green  .admin__image-name',
                        Class: 'admin__image',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.green  .admin__image-name',
                        Class: 'admin__name',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.green  .admin__name',
                        Class: 'name',
                        Element: 'span',
                        Content: user.name,
                    })
                        .Child({
                        Parent: '.green  .admin__user-today',
                        Class: 'admin__configs',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.green  .admin__configs',
                        Class: 'admin__ip',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.green  .admin__ip',
                        Class: 'ip',
                        Element: 'span',
                        Content: user.ip,
                    })
                        .Child({
                        Parent: '.green  .admin__configs',
                        Class: 'admin__config',
                        Element: 'button',
                    })
                        .Child({
                        Parent: '.green  .admin__configs',
                        Class: 'admin__config-open',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.green  .admin__config-open',
                        Class: [
                            'admin__config-open-child',
                            'admin__config-open-child---delete',
                        ],
                        Element: 'button',
                        Attribute: [{ Key: 'data-user-Today', Value: user.id }],
                        Content: 'Delete',
                    })
                        .Child({
                        Parent: '.green  .admin__config-open',
                        Class: [
                            'admin__config-open-child',
                            'admin__config-open-child---update',
                        ],
                        Attribute: [
                            { Key: 'open-form', Value: '#fadeout-green' },
                            { Key: 'data-user-Today-update', Value: user.id },
                            { Key: 'data-user-ip-update', Value: user.ip },
                            { Key: 'data-user-name-update', Value: user.name },
                        ],
                        Element: 'button',
                        Content: 'Update',
                    })
                        .Child({
                        Parent: '.green  .admin__config',
                        Class: 'admin__bollet',
                        Element: 'span',
                    })
                        .Child({
                        Parent: '.green  .admin__config',
                        Class: 'admin__bollet',
                        Element: 'span',
                    })
                        .Child({
                        Parent: '.green  .admin__config',
                        Class: 'admin__bollet',
                        Element: 'span',
                    });
                });
                $('.green  .admin__config').each(function (index, element) {
                    $(element).on('click', function (_a) {
                        var target = _a.target;
                        var brother = $(target).siblings()[1];
                        $(brother).toggleClass('admin__config-open--active');
                    });
                });
                _this_1.deleteUserToday();
                _this_1.putUserToday();
            }
            else {
                $('.admin__users-today-info-controls#green-none').addClass('admin__users-today-info-controls--disabled');
                $('#count-green ~ .admin__button-more').addClass('admin__button-more--disabled');
                $('#count-green').addClass('count--disabled');
            }
        });
    };
    usersToday.prototype.deleteUserToday = function () {
        var _this_1 = this;
        $('.admin__config-open-child---delete').each(function (i, element) {
            $(element).on('click', function (_a) {
                var target = _a.target;
                var dataUserToday = $(target).attr('data-user-Today');
                _this_1.requestAjaxUsersTodayDelete(dataUserToday);
            });
        });
    };
    usersToday.prototype.requestAjaxUsersTodayDelete = function (dataUserToday) {
        var _this = this;
        $.ajax({
            method: 'delete',
            url: this.usersTodayString,
            dataType: 'json',
            data: { id: dataUserToday },
            success: function () {
                $('.green .admin__user-today').remove();
                _this.requestAjaxUsersTodayGet();
            },
        });
    };
    usersToday.prototype.putUserToday = function () {
        var _this_1 = this;
        $('.admin__config-open-child---update').each(function (i, element) {
            $(element).on('click', function (_a) {
                var target = _a.target;
                var dataUserNameUpdate = ($(target).attr('data-user-name-update'));
                var dataUserIPUpdate = $(target).attr('data-user-ip-update');
                var dataUserIDUpdate = ($(target).attr('data-user-Today-update'));
                var id = $(target).attr('open-form');
                $(id).addClass('admin__fixed-form-update--show');
                $('.form__input-name-green input').val(dataUserNameUpdate);
                $('.form__input-ip-green input').val(dataUserIPUpdate);
                $('.form__input-ip-green').attr('data-idgreen', dataUserIDUpdate);
                $('#green-yes').on('click', function () {
                    var inputName = $('.form__input-name-green input').val();
                    var inputIp = $('.form__input-ip-green input').val();
                    var inputId = ($('.form__input-ip-green').attr('data-idgreen'));
                    _this_1.requestAjaxUsersTodayPut(inputId, inputName, inputIp);
                });
            });
        });
    };
    usersToday.prototype.requestAjaxUsersTodayPut = function (dataUserIDUpdate, inputName, inputIp) {
        var _this = this;
        $.ajax({
            method: 'put',
            url: this.usersTodayString,
            dataType: 'json',
            data: { id: dataUserIDUpdate, name: inputName, ip: inputIp },
            success: function () {
                _this.requestAjaxUsersTodayGet();
            },
        });
    };
    return usersToday;
}());
new usersToday();
