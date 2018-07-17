$("#button_start_new_game").kendoButton({});

$("#allGames").kendoGrid({
    dataSource: {
        data,
        pageSize: 7
    },
    pageable: true,
    height: 620,
    columns: [
        { field: "Id", title: "Id game" },
        {
            field: "CreationDate",
            title: "Date game",
            type: "date",
            format: "{0: dd/MMMM/yyyy H:mm}"
        },
        { command: { text: "Game details", click: showDetails }, title: " ", width: "180px" }
    ]
});
function showDetails(e) {
    e.preventDefault();
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    id = dataItem.Id;
    window.open("GameDetails" + "/" + id);
};

