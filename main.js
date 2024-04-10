var actions = [];

function addAction() {
    var actionInput = document.getElementById("actionInput");
    var action = actionInput.value.trim();
    if (action !== "") {
        actions.push(action);
        renderActions();
        renderActionCount();
        actionInput.value = "";
    } else {
        alert("Por favor, ingrese una acción válida.");
    }
}

function renderActions() {
    var actionList = document.getElementById("actionList");
    actionList.innerHTML = "";
    actions.forEach(function(action) {
        var newRow = document.createElement("tr");
        var newCell = document.createElement("td");
        newCell.textContent = action;
        newRow.appendChild(newCell);
        actionList.appendChild(newRow);
    });
}

function exportToExcel() {
    var csvContent = "data:text/csv;charset=utf-8,";
    actions.forEach(function(action) {
        csvContent += action + "\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "bitacora_acciones.csv");
    document.body.appendChild(link);
    link.click();
}

function renderActionCount() {
    var actionCount = document.getElementById("actionCount");
    actionCount.textContent = "Cantidad de acciones: " + actions.length;
}
