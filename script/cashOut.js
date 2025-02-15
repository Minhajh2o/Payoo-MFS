document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount = getInputFieldValueByID('input-cash-out-amount');
    const pinNum = getInputFieldValueByID('input-pin-to-cash-out');

    console.log('input amount:', inputAmount);
    console.log('pinNum:', pinNum);

    if (isNaN(inputAmount)) {
        alert('Please enter a valid number');
        return;
    }

    if (pinNum === 1230) {
        const availableBalance = getTextFieldValueByID('available-balance');
        console.log(availableBalance);
        console.log('deposit success');
        const newBalance = availableBalance - inputAmount;
        console.log('new balance:', newBalance);

        if (newBalance < 0) {
            alert('Insufficient amount');
            return;
        }

        setTextFieldValueByID('available-balance', newBalance)

        const p = document.createElement('p');
        p.innerText = `Withdrawal amount $${inputAmount}`;
        transactions.appendChild(p);
    } else {
        alert('Wrong amount or pin');
    }

    console.log('login button clicked');
});
