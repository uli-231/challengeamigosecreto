// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja() {
    document.getElementById('amigo').value = ''; // Clear the input box
}

function agregarAmigo() {
        // Check if the input box is empty
    if (document.getElementById('amigo').value == '') {
        alert('Por favor, inserte un nombre.');
    } 
    else {
        amigos.push(document.getElementById('amigo').value); // Add the friend's name to the friends array
        console.log(amigos); // Log the friends array to the console
        // Show the friend's name in the list
    }
    limpiarCaja() // Clear the input box
    llenarListaDeAmigos() // Fill the list with the friends' names
    return;
}

function llenarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos'); // Get the list element
    listaAmigos.innerHTML = ""; // Clear the list before adding new items
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Create a new list item
        li.textContent = amigos[i]; // Set the text content to the friend's name
        listaAmigos.appendChild(li); // Append the list item to the list
    }
    
}

function sortearAmigo() {
    if (amigos.length == 0) { // Check if the friends array is empty
        alert('Por favor, inserte al menos un amigo.');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)]; // Get a random friend from the friends array
    document.getElementById('resultado').innerHTML = amigoSorteado; // Show the random friend in the result element
    return;
}