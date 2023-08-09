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

/* El doble disparo de la alerta "Hola!" en el botón se debe a que estás usando 
tanto el atributo onclick en el HTML como el evento click con addEventListener en JavaScript. 
Esto provoca que la función saludar() se ejecute dos veces. 
Para resolver este problema, puedes eliminar el atributo onclick del botón en el HTML y 
solo utilizar el addEventListener en el script de JavaScript. */ 


