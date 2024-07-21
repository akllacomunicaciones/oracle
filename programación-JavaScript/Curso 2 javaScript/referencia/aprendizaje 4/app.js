//alert("hola mundo");

//variables let, var or const
/* 
let x = 1000;
let y = 60;

console.log(x - y); */

//JUEGO:

let numeroSecreto = Math.floor(Math.random()*10 + 1); //más 1 siempre para evitar decimal con la función TnumeroSecreto escrito así por camelcase
let numeroUsuario = 0;
let intentos = 1;

console.log(numeroSecreto); 

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Indica un número entre 1 y 10 por favor");

    if (numeroUsuario == numeroSecreto) {
        alert("Adivinaste el número secreto");
    } else{
        alert("No adivinaste el número secreto");
    
        intentos++;
        if (intentos > 2){
            alert(`llegaste al número máximo de intentos el número secreto era ${numeroSecreto}`);
        }
    
    }
    
    
}


