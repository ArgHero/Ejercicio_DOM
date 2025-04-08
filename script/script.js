let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista = document.getElementsByTagName('ul');

let elementos = document.getElementsByClassName("list-group-item");//elemento vivo
let otroElemento = document.querySelector("ul>li");//Solo regresa el primero, elemento vivo

let otrosElementos = document.querySelectorAll("ul>li");//No es una lista viva, es decir, no modifica el DOM de ser modificada

let btnMostrar = document.getElementById("btnMostrar");

console.log("Otro elemento: ",otroElemento);
console.log(otrosElementos.length);

encabezado1.innerText="<em>Encabezado DOM</em>";
console.log(lista[0]);
encabezado2.innerHTML = "<em>eningles</em>";


let contador = 0;
const modifica = ()=>{
    encabezado1.innerHTML += "<em> Ejercicio</em>";
    encabezado2.innerText = ++contador;
}
btnMostrar.addEventListener("click",function (event){
    event.preventDefault();
    console.log(event);
    
    btnMostrar.innerText="Sea preto";
    console.log("Se presionó el botón mostrar");
});