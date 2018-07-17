$("#button_take").kendoButton({});
var onSuccess = function (result) {
    if (result.url) {
        window.location.href = result.url;
    }
}
$("#button_enough").kendoButton({});