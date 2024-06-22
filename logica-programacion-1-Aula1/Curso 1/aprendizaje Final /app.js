
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

let numeroSecreto = 5;
let numeroUsuario = 0; //el valor de esta variable no importa
let intentos = 1;



while (numeroUsuario != numeroSecreto){

    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:"); //puedes poner variables sin let adelante dentro de un while o bucle

    if (numeroUsuario == numeroSecreto) {
        alert("Acertaste");
    } else  {
        if (numeroUsuario < numeroSecreto){
            alert("El número es mayor");
        
        }
        if (numeroUsuario > numeroSecreto){
            alert("El número es menor");
        }
     intentos = intentos + 1;
     if (intentos > 5){
        alert("llegaste al número máximo de intentos")
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