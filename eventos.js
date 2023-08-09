const miDiv = document.querySelector(".container");
const boton = document.querySelector("#btn");

miDiv.addEventListener("click", () => {
    alert("Hola! Soy el Div")
})

/* El problema con el código actual es que la función asociada a la alerta del div "anula"
o deja por debajo a la función asociada al botón. Para evitar esto podemos usar el siguiente código:

function saludar(){
    alert("Hola!")
}

const miDiv = document.querySelector("#container")
const boton = document.querySelector("#btn")

miDiv.addEventListener("click", (e) => {
    alert("Hola! Soy el Div");
    e.stopPropagation();
})

boton.addEventListener("click", (e) => {
  saludar();
  e.stopPropagation();
})

Además, la etiqueta script en html con src que vincula al código js debe estar hacia el final 
del body para que se ejecute por último.

Con este código aparece doble la alerta cuando se clickea el botón Saludar, esto se debe al onclick 
en el HTML y al evento click con addEventListener en js, la función saludar() se ejecute dos veces. 
Para resolver este problema, podemos eliminar el atributo onclick del botón en el HTML y 
solo utilizar el addEventListener en el script de JavaScript.

*/