document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount = getInputFieldValueByID('input-cash-out-amount');
    const pinNum = getInputFieldValueByID('input-pin-to-cash-out');

    console.log('input amount:', inputAmount);
    console.log('pinNum:', pinNum);

    
    if (pinNum === 1230) {
        const availableBalance = getTextFieldValueByID('available-balance');
        console.log(availableBalance);
        console.log('deposit success');
        const newBalance = availableBalance - inputAmount;
        console.log('new balance:', newBalance);
        setTextFieldValueByID('available-balance', newBalance)
    } else {
        alert('Wrong amount or pin');
    }

    console.log('login button clicked');
});