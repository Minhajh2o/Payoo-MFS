document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const mobileNum = document.getElementById('input-mobile-num').value;
    const pinNum = document.getElementById('input-pin').value;

    console.log('mobileNum:', mobileNum);
    console.log('pinNum:', pinNum);

    if (mobileNum === '01571243180' || pinNum === '1230') {
        console.log('login success');
    } else {
        alert('Wrong mobile number or pin');
    }

    console.log('login button clicked');
});