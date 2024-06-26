
//DATOS
"hola", "cadena de caracteres";
12, 23.32, 43;
true, false;

//VARIALES let or var , const
//juego: ¿Cúales fueron tus ventas?

/* 
let ventas = 100;
let costos = 40;

console.log(ventas - costos); */

//BUCLES
//CONDICIONALES == === !=  <=  >=
//Dentro de else se puede poner otro if

let numeroSecreto = Math.floor(Math.random()*100 + 1) //funciones anidadas es decir funcion dentro de funcion//el valor de esta variable no importa;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 5;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un número entre 1 y 100 por favor:"); //puedes poner variables sin let adelante dentro de un while o bucle

    //console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el número secreto es  ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }  `); //operadores ternarios //template string
    } else  {
        if (numeroUsuario < numeroSecreto){
            alert("El número es mayor");
        
        }
        if (numeroUsuario > numeroSecreto){
            alert("El número es menor");
        }
     //intentos = intentos + 1;
     intentos++;
     if (intentos > maximosIntentos){
        alert(`llegaste al número máximo de ${maximosIntentos} veces`) //template string
        break; //para  finalizar el bucle o while
     }

    }
}




































//FUNCIONES

/* function saludar(){
    let nombre = prompt("Ingrese su nombre");
    alert("Hola " + nombre); //concatenar texto or string + variable

}




function suma(a,b){
    console.log(a + b);
}


 */





//alert("hola empresarios")
//prompt("dame un número del 1 al 10")