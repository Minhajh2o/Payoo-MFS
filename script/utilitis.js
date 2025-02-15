function getInputFieldValueByID(id) {
    return parseFloat(document.getElementById(id).value);
}

function getTextFieldValueByID(id) {
    return parseFloat(document.getElementById(id).innerText);    
}

function setTextFieldValueByID(id, value) {
    document.getElementById(id).innerText = value;
}


