// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let amigos = [];
console.log(amigos);

//Desarrolla una función, que permita al usuario ingresar un nombre
// en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    //  Obtener el valor del input
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo)
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // detenemos la función aquí
    }

    //  Actualizar el array de amigos con push()
    amigos.push(nombreAmigo);
    limpiarCaja();
}

//  Limpiar el campo de entrada
function limpiarCaja(){
    let valorCaja =  document.querySelector('#amigo');
    valorCaja.value = '';
}


function actualizarLista() {
      // 1️⃣ Obtener el elemento UL donde irá la lista
      const lista = document.getElementById("listaAmigos");

      // 2️⃣ Limpiar lista existente (evitar duplicados)
      lista.innerHTML = "";

      // 3️⃣ Iterar sobre el arreglo amigos
      for (let i = 0; i < amigos.length; i++) {
        // 4️⃣ Crear un nuevo <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el <li> dentro del <ul>
        lista.appendChild(li);
      }
}


// Función para generar un amigo secreto
function sortearAmigo() {
      if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indiceAleatorio];

      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}`;
    }


asignarTextoElemento('h1', '¡JUEGO DEL AMIGO SECRETO!');
asignarTextoElemento('h2', '¡Digite el nombre de tus amigos!');