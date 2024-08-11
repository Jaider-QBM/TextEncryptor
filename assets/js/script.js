let inputMenssage = document.getElementById('textPalabra');
let inputResult = document.getElementById('menssage__result');
let contentResult = document.getElementById('result__menssage')
let contentNoResult = document.getElementById('no__message');

// Validacion si el contenido es valido
function validacionTexto(texto) {
    const valiPala = /^[a-z\s]+$/;
    return valiPala.test(texto);
}

//Funcion para encriptar el texto
function encriptador(texto) {

    if(!validacionTexto(texto)){
        return "EL texto debe ser en minusculas y sin acento"
    }

    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

//Funcion para desencriptar el texto
function desencriptador(texto) {

    if(!validacionTexto(texto)){
        return "EL texto debe ser en minusculas y sin acento"
    }

    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

//Funcion para copiar el resultado del texto
function copiarTexto() {
    const texto = document.getElementById('menssage__result');
    navigator.clipboard.writeText(texto.innerText)
    contentNoResult.style.display ='flex' ;
    contentResult.style.display ='none' ;
}


function encriptar() {
    let palOriginal = inputMenssage.value;
    let palEncriptada= encriptador(palOriginal);
    contentNoResult.style.display ='none' ;
    contentResult.style.display ='flex' ;
    inputResult.innerHTML = palEncriptada;
    inputMenssage.value = '';
}

function desencriptar() {
    let palOriginal = inputMenssage.value;
    let palEncriptada= desencriptador(palOriginal);
    contentNoResult.style.display ='none' ;
    contentResult.style.display ='flex' ;
    inputResult.innerHTML = palEncriptada;
    inputMenssage.value = '';
}