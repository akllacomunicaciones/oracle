//var let or const

//gastos o ventas MARGEN NETO UTILIDAD NETA
//declarar variables
/* let ventas = 1000;
let gastos = 50;

console.log(ventas - gastos); */

    function saludar(){
    alert   ('Hola amigos empresarios');
}


/* function dejameSaludar(){
    prompt('Hola amigo empresario dejame un número del 1 al 10');
} */


let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = prompt('Hola amigo empresario, adivina el número secreto del 1 al 10');

console.log(numeroSecreto);

if (numeroUsuario == numeroSecreto) {
    alert('Felicidades, acertaste el número secreto');
}
else {
    alert(`Lo siento, el número secreto era ${numeroSecreto}`);
}
/* else{
    alert('Lo siento, el número secreto era ' + numeroSecreto);
} */