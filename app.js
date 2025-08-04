// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaNombres = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    listaNombres.push(nombre);
    inputAmigo.value = '';
    mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    listaAmigos.innerHTML = '';
    listaNombres.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }
    const indice = Math.floor(Math.random() * listaNombres.length);
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${listaNombres[indice]}</strong></li>`;
}

// Hacer las funciones accesibles desde el HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;