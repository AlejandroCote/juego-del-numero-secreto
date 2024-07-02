let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

if(numeroDeUsuario === numeroSecreto){
    asignarTextoElElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //El usuario no acertó
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElElemento('p','El número secreto es menor');
    } else{
        asignarTextoElElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
        
     //si el numero generado esta incluido en la lista
       if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
 asignarTextoElElemento('h1','Juego del número secreto!');
 asignarTextoElElemento('p',`Escribe un número del 1 al ${numeroMaximo}`);
 numeroSecreto = generarNumeroSecreto();
 intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();