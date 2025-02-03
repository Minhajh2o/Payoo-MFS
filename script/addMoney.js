document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount = parseFloat(document.getElementById('input-amount').value);
    const pinNum = document.getElementById('input-pin').value;

    console.log('input amount:', inputAmount);
    console.log('pinNum:', pinNum);

    
    if (pinNum === '1230') {
        const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
        console.log(availableBalance);
        console.log('deposit success');
        const newBalance = availableBalance + inputAmount;
        console.log('new balance:', newBalance);
        document.getElementById('available-balance').innerText = newBalance;
    } else {
        alert('Wrong amount or pin');
    }

    console.log('login button clicked');
});