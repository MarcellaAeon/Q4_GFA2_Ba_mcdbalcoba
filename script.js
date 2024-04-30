function multiplicationTable() {
    var rows = document.getElementById("row").value;
    var columns = document.getElementById("col").value;
    var tableCont = document.getElementById("tableCont");
    tableCont.innerHTML = "";
    rows = parseInt(rows);
    columns = parseInt(columns);

    if (rows < 2 || rows > 10 || columns < 2 || columns > 10) {
        alert("Please enter numbers between 2 and 10!");
        return; 
    }

    var mulTable = "<table border='1'>";

    for (var r = 1; r <= rows; r++) {
        mulTable += "<tr>";
        for (var c = 1; c <= columns; c++) {
            mulTable += "<td>" + (r * c) + "</td>";
        }
        mulTable += "</tr>";
    }
    mulTable += "</table>";
    tableCont.innerHTML = mulTable;
}