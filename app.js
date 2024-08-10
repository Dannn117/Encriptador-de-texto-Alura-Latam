function Encriptador() {
    var texto = document.getElementById("MensajeUsuario").value.toLowerCase();
    var TextoEncriptado = texto.replace(/e/img, "enter");
    TextoEncriptado = TextoEncriptado.replace(/i/img, "imes");
    TextoEncriptado = TextoEncriptado.replace(/a/img, "ai");
    TextoEncriptado = TextoEncriptado.replace(/o/img, "ober");
    TextoEncriptado = TextoEncriptado.replace(/u/img, "ufat");
    document.getElementById("CajaMensaje").value = TextoEncriptado;
    checkTextarea();
}

function Desencriptador() {
    var texto = document.getElementById("MensajeUsuario").value.toLowerCase();
    var TextoEncriptado = texto.replace(/enter/img, "e");
    TextoEncriptado = TextoEncriptado.replace(/imes/img, "i");
    TextoEncriptado = TextoEncriptado.replace(/ai/img, "a");
    TextoEncriptado = TextoEncriptado.replace(/ober/img, "o");
    TextoEncriptado = TextoEncriptado.replace(/ufat/img, "u");
    document.getElementById("CajaMensaje").value = TextoEncriptado;
    checkTextarea();
}

function LimpiarCajaMensaje() {
    document.getElementById("CajaMensaje").value = "";
    checkTextarea();
}

function recargarPagina() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    var recargarImagen = document.getElementById('recargarImagen');
    recargarImagen.addEventListener('click', recargarPagina);
    
    var textarea = document.getElementById('CajaMensaje');
    textarea.addEventListener('input', checkTextarea);
    checkTextarea(); 
});

function Copiar() {
    var seleccionar = document.getElementById("CajaMensaje");
    seleccionar.select();
    document.execCommand("copy");
}

function checkTextarea() {
    var textarea = document.getElementById('CajaMensaje');
    var imagen = document.getElementById('Desaparece');
    if (textarea.value.trim() === "") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}

