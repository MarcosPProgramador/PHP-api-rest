"use strict";
var usersVisited = /** @class */ (function () {
    function usersVisited() {
        this.usersVisitedString = path + "api/usersvisited";
        this.requestAjaxUsersVisitedGet();
    }
    usersVisited.prototype.requestAjaxUsersVisitedGet = function () {
        var _this = this;
        $.ajax({
            method: 'get',
            url: this.usersVisitedString,
            dataType: 'json',
            success: function () {
                _this.getUsersVisited();
            },
        });
    };
    usersVisited.prototype.getUsersVisited = function () {
        var _this_1 = this;
        getContext(this.usersVisitedString, function (users) {
            var len = users.length != undefined ? users.length : 0;
            $('#count-red').text(len);
            if (Array.isArray(users)) {
                $('.admin__users-today-info-controls#red-none').removeClass('admin__users-today-info-controls--disabled');
                $('#count-red ~ .admin__button-more').removeClass('admin__button-more--disabled');
                $('#count-red').removeClass('count--disabled');
                $('.red .admin__user-today').remove();
                $.map(users, function (user, i) {
                    _('.red')
                        .Child({
                        Index: i,
                        Class: 'admin__user-today',
                        Element: 'div',
                    })
                        .Child({
                        Class: 'admin__image-name',
                        Parent: '.red .admin__user-today',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.red  .admin__image-name',
                        Class: 'admin__image',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.red  .admin__image-name',
                        Class: 'admin__name',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.red  .admin__name',
                        Class: 'name',
                        Element: 'span',
                        Content: user.name,
                    })
                        .Child({
                        Parent: '.red  .admin__user-today',
                        Class: 'admin__configs',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.red  .admin__configs',
                        Class: 'admin__ip',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.red  .admin__ip',
                        Class: 'ip',
                        Element: 'span',
                        Content: user.ip,
                    })
                        .Child({
                        Parent: '.red  .admin__configs',
                        Class: 'admin__config',
                        Element: 'button',
                    })
                        .Child({
                        Parent: '.red  .admin__configs',
                        Class: 'admin__config-open',
                        Element: 'div',
                    })
                        .Child({
                        Parent: '.red  .admin__config-open',
                        Class: [
                            'admin__config-open-child',
                            'admin__config-open-child---delete',
                        ],
                        Element: 'button',
                        Attribute: [{ Key: 'data-user-visited', Value: user.id }],
                        Content: 'Delete',
                    })
                        .Child({
                        Parent: '.red  .admin__config-open',
                        Class: [
                            'admin__config-open-child',
                            'admin__config-open-child---update',
                        ],
                        Attribute: [
                            { Key: 'open-form', Value: '#fadeout-red' },
                            { Key: 'data-user-visited-update', Value: user.id },
                            { Key: 'data-user-ip-update', Value: user.ip },
                            { Key: 'data-user-name-update', Value: user.name },
                        ],
                        Element: 'button',
                        Content: 'Update',
                    })
                        .Child({
                        Parent: '.red  .admin__config',
                        Class: 'admin__bollet',
                        Element: 'span',
                    })
                        .Child({
                        Parent: '.red  .admin__config',
                        Class: 'admin__bollet',
                        Element: 'span',
                    })
                        .Child({
                        Parent: '.red  .admin__config',
                        Class: 'admin__bollet',
                        Element: 'span',
                    });
                });
                $('.red  .admin__config').each(function (index, element) {
                    $(element).on('click', function (_a) {
                        var target = _a.target;
                        var brother = $(target).siblings()[1];
                        $(brother).toggleClass('admin__config-open--active');
                    });
                });
                _this_1.deleteUserVisited();
                _this_1.putUserVisited();
            }
            else {
                $('.admin__users-today-info-controls#red-none').addClass('admin__users-today-info-controls--disabled');
                $('#count-red ~ .admin__button-more').addClass('admin__button-more--disabled');
                $('#count-red').addClass('count--disabled');
            }
        });
    };
    usersVisited.prototype.deleteUserVisited = function () {
        var _this_1 = this;
        $('.admin__config-open-child---delete').each(function (i, element) {
            $(element).on('click', function (_a) {
                var target = _a.target;
                var dataUserVisited = $(target).attr('data-user-visited');
                _this_1.requestAjaxUsersVisitedDelete(dataUserVisited);
            });
        });
    };
    usersVisited.prototype.requestAjaxUsersVisitedDelete = function (dataUserVisited) {
        var _this = this;
        $.ajax({
            method: 'delete',
            url: this.usersVisitedString,
            dataType: 'json',
            data: { id: dataUserVisited },
            success: function () {
                $('.red .admin__user-today').remove();
                _this.requestAjaxUsersVisitedGet();
            },
        });
    };
    usersVisited.prototype.putUserVisited = function () {
        var _this_1 = this;
        $('.admin__config-open-child---update').each(function (i, element) {
            $(element).on('click', function (_a) {
                var target = _a.target;
                var dataUserNameUpdate = ($(target).attr('data-user-name-update'));
                var dataUserIPUpdate = $(target).attr('data-user-ip-update');
                var dataUserIDUpdate = ($(target).attr('data-user-visited-update'));
                var id = $(target).attr('open-form');
                $(id).addClass('admin__fixed-form-update--show');
                $('.form__input-name-red input').val(dataUserNameUpdate);
                $('.form__input-ip-red input').val(dataUserIPUpdate);
                $('.form__input-ip-red').attr('data-idred', dataUserIDUpdate);
                $('#red-yes').on('click', function () {
                    var inputName = $('.form__input-name-red input').val();
                    var inputIp = $('.form__input-ip-red input').val();
                    var inputId = $('.form__input-ip-red').attr('data-idred');
                    _this_1.requestAjaxUsersVisitedPut(inputId, inputName, inputIp);
                });
            });
        });
    };
    usersVisited.prototype.requestAjaxUsersVisitedPut = function (dataUserIDUpdate, inputName, inputIp) {
        var _this = this;
        $.ajax({
            method: 'put',
            url: this.usersVisitedString,
            dataType: 'json',
            data: { id: dataUserIDUpdate, name: inputName, ip: inputIp },
            success: function () {
                _this.requestAjaxUsersVisitedGet();
            },
        });
    };
    return usersVisited;
}());
new usersVisited();
