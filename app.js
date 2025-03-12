// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
        
    if (document.getElementById('amigo').value == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(document.getElementById('amigo').value);
        console.log(amigos);
        alert('Amigo ingresado exitosamente')
    }
    limpiarCaja()
    return;
}