//declaramos una variable para guardar un arreglo
let amigo = [];

//creamos una funcion para agregar amigos
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert ("Ingresa un nombre para iniciar la selección");
        return;        
    }
    amigo.push(nombreAmigo);
    inputAmigo.value ="";
    inputAmigo.focus();
    listaAmigo();
 }

 function listaAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i=0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item)
    }
 }

 function sortearAmigo(){
    if(amigo.length < 2){
        alert("No tienes suficientes amigos para el sorteo");
        return;
    }
    let sorteo = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo al que debes hacer un regalo es: ${sorteo}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
 }
 // Nueva función para limpiar la pantalla
function limpiarPantalla() {
    amigo = []; // Vaciar el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en la pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
    document.getElementById("amigo").value = ""; // Limpiar el input
}