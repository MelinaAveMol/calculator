const displayCurrentValue = document.getElementById("current-value");
const numberButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");

numberButtons.forEach(numberButton =>{

    numberButton.addEventListener('click', () => {
        alert(numberButton.dataset.number);
        //quitar alertsustituir display x (numberButton.dataset.number
    });
});

operatorsButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click',  () => {

    });
});

