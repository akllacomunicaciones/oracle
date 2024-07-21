
//DENTRO DE LAS CONDICIONALES SE COLOCA LAS VARIABLES(numeroUsuario == numeroSecret)

/* if (condicion1) {
     Bloque de código que se ejecuta si 'condicion1' es verdadera
} else if (condicion2) {
     Bloque de código que se ejecuta si 'condicion1' es falsa y 'condicion2' es verdadera
} else {
     Bloque de código que se ejecuta si todas las condiciones anteriores son falsas
}
 */



//SIEMPRE DECLAREN VARIABLES AL INICIO PLEASE

let numeroSecreto = 5;
let numeroUsuario = prompt("Adivina el número secreto");
let intentos = 1;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Adivina el número secreto");

    if(numeroUsuario == numeroSecreto){
        alert(`adivinaste y lo hiciste en ${intentos} intentos` ); // usar siempre `` ese tipo de comillas invertidas para colocar variables dentro de un string o alert
    }

    else{
        alert("no adivinaste")
    }
    intentos = intentos + 1;
    break;
}








//while o bucles



















/* 


function saludar(){
    alert("hola empresarios")
};


 */