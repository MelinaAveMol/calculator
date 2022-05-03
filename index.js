// Si pulso un botón de número diferente a cero y en el display hay un cero tiene
// que sustituirse (=) el cero por el número pulsado. Sino debe sustituirse el valor
// de la pantalla nuevamente por 0. Si en el display hay un número diferente a cero concatenaré(+=).

// Si pulso en borrar el último caracter y sólo queda un caracter en la pantalla se debe
// sustituir por un cero el valor de la pantalla. Descubrir una función de js para contar
// el número de caracteres de una cadena de texto. 

// Si pulso el boton de punto y no hay ningún operador en la pantalla sólo puedo escribir un punto. En 
// cambio si hay un operador en la pantalla entonces sólo puedo escribir dos puntos. Descubrir
// una función que cuente cuantas veces aparece un caracter en un cadena de texto.

// Si pulso un botón de operador y hay un operador en pantalla.
// En caso de que el operador de la pantalla sea la última posición entonces:
// - si son iguales no ocurre nada
// - si son diferentes se sustituye
// En caso de que la última posición de la pantalla sea un número entonces:
// - hace el calculo y añade el operador pulsado al final

let display = document.querySelector(".display");
let numberButtons = document.querySelectorAll(".number");
let operatorsButtons = document.querySelectorAll(".operator");
let dot = document.querySelector(".dot");
let erase = document.querySelector(".erase");
let eraseLast = document.querySelector(".erase-last");
let compute = document.querySelector(".compute");

numberButtons.forEach(numberButton =>{

    numberButton.addEventListener('click', () => {

        // En cualquier momento podemos ver que hay dentro de un div con innerHTML
        // console.log(display.innerHTML);
        display.innerHTML += numberButton.dataset.number;
         
        if(numberButton.dataset.number  ) {
            //alert("");
        }else if( >= ) {
            //alert("");
        }else{
            //alert("");
        }

        //alert(display.innerHTML.length);

    });
});

operatorsButtons.forEach(operatorButton => {

    operatorButton.addEventListener('click',  () => {
        display.innerHTML = operatorButton.dataset.operator;
    });
});

dot.addEventListener("click", () => {
    display.innerHTML += dot.dataset.dot;
});

erase.addEventListener("click", () => {
    display.innerHTML = 0;
});

eraseLast.addEventListener("click", () => {
    // Descubrir una función de js que permita eliminar el último carácter de una cadena de texto
});

compute.addEventListener("click", () => {
    // Descubrir una función de js para calcular cadena de texto
});