document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = document.getElementById('input-amount').value;
    const pinNum = document.getElementById('input-pin').value;

    console.log('input amount:', amount);
    console.log('pinNum:', pinNum);

    // document.getElementById('available-balance').innerText;
    // console.log('available balance:', available-balance);

    if (pinNum === '1230') {
        console.log('deposit success');
    } else {
        alert('Wrong amount or pin');
    }

    console.log('login button clicked');
});