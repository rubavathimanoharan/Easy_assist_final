var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["subject"] = document.getElementById("autocompleteInput").value;
    formData["department"] = document.getElementById("department").value;
    formData["priority"] = document.getElementById("priority").value;
    formData["descripton"] = document.getElementById("descripton").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.department;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.priority;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.subject;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.descripton;
   
   
}

function resetForm() {
    document.getElementById("autocompleteInput").value = "";
    document.getElementById("department").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("descripton").value = "";
    selectedRow = null;
}



function validate() {
    isValid = true;
    if (document.getElementById("autocompleteInput").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}