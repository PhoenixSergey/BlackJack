$("#button_start").kendoButton({});
var data = user;
$("#ourPlayers").kendoComboBox({
    dataSource: data
});
var data1 = [1, 2, 3, 4, 5];
$("#countBot").kendoDropDownList({
    dataSource: data1
});