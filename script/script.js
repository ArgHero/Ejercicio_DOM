let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item"); //elemento vivo
let otroElemento = document.querySelector("ul>li"); //Solo regresa el primero, elemento vivo

let otrosElementos = document.querySelectorAll("ul>li"); //No es una lista viva, es decir, no modifica el DOM de ser modificada

let btnMostrar = document.getElementById("btnMostrar");

let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");


console.log("Otro elemento: ", otroElemento);
console.log(otrosElementos.length);

encabezado1.innerText = "<em>Encabezado DOM</em>";
console.log(listas[0]);
encabezado2.innerHTML = "<em>eningles</em>";

let contador = 0;
const modifica = () => {
  encabezado1.innerHTML += "<em> Ejercicio</em>";
  encabezado2.innerText = ++contador;
};
// btnMostrar.addEventListener("click",function (event){
//     event.preventDefault();
//     console.log(event);

//     btnMostrar.innerText="Sea preto";
//     console.log("Se presionó el botón mostrar");
// });

btnMostrar.addEventListener("click", function (event) {
  event.preventDefault();
  let element = document.createElement("li");
  element.innerText = "El quinto elemento"; // <li>EL quinto elemento</li>
  element.classList.add("list-group-item");

  let element2 = element.cloneNode(true);

  listas.item(0).append(element);
  listas.item(0).prepend(element2);

  listas.item(0).before(element);
  listas.item(0).after(element2);

//   Funcionan igual que los 4 métodos pasados.
//   listas.item(1).insertAdjacentElement("afterbegin", element);
//   listas.item(1).insertAdjacentElement("beforebegin", element2);
//   listas.item(1).insertAdjacentElement("afterend", element);
//   listas.item(1).insertAdjacentElement("beforeend", element2);

  listas
    .item(1)
    .insertAdjacentHTML(
      "beforebegin",
      `<li class="list-group-item">Por fuera inicio</li>`
    );

  listas
    .item(1)
    .insertAdjacentHTML(
      "afterbegin",
      `<li class="list-group-item">Lista comienzo</li>`
    );
  listas
    .item(1)
    .insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item">Lista final</li>`
    );
  listas
    .item(1)
    .insertAdjacentHTML(
      "afterend",
      `<li class="list-group-item">Abajo por fuera</li>`
    );
});
window.addEventListener("load",function(event){
	//Cosas que se hacen cuando la página acaba de cargar.
	console.log("Se terminó de cargar la página")
});//load

function txtToUpper(event){
  event.preventDefault();
  event.target.value = event.target.value.trim().toUpperCase();
}
txtRFC.addEventListener("blur",txtToUpper);
txtTelefono.addEventListener("blur",txtToUpper);
txtCURP.addEventListener("blur",txtToUpper);

// //Blur: Cuando se sale del campo
// txtRFC.addEventListener("blur",function(event){
//   event.preventDefault();
//   txtRFC.value = txtRFC.value.toUpperCase();
// });//RFC
// txtTelefono.addEventListener("blur",function(event){
//   txtTelefono.value = txtTelefono.value.slice(0,10);
// })//telefono

