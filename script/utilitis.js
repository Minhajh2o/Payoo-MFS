function getInputFieldValueByID(id) {
    return parseFloat(document.getElementById(id).value);
}

function getTextFieldValueByID(id) {
    return parseFloat(document.getElementById(id).innerText);    
}

function setTextFieldValueByID(id, value) {
    document.getElementById(id).innerText = value;
}

function showSectionByID(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // document.getElementById('').classList.add('hidden');
    // document.getElementById('').classList.add('hidden');
    // document.getElementById('').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
