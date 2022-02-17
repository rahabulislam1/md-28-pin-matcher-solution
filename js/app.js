function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const getString = (pin + '');
    if (getString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousCalc = calcInput.value;
        const newNumber = previousCalc + number;
        calcInput.value = newNumber;
    }
})

function verifiPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');

    if (pin == typedNumber) {
        successMessage.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failNotification.style.display = 'block';
    }
}