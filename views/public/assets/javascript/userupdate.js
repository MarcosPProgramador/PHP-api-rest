"use strict";
updateUser();
function updateUser() {
    timeUpdate();
    var timeUpdateUser = 40000;
    function timeUpdate() {
        setTimeout(function () {
            timeBrother();
            __.ajax({
                url: path + "api/user",
                method: 'put',
                dataType: 'json',
                success: function (response) { },
            });
        }, timeUpdateUser);
    }
    function timeBrother() {
        setTimeout(timeUpdate, timeUpdateUser);
    }
}
