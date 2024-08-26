const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeH6 = document.querySelector(".mensaje-1");
const mensajeP = document.querySelector(".mensaje-2");
const btnCopiar = document.querySelector(".btn-copiar")



function verificarTexto(texto) {
    const estaVacio = /^$/.test(texto) || texto === null;
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneAcentos = /[áéíóúüÁÉÍÓÚÜ]/.test(texto);

    if (estaVacio) {
        alert("El texto no puede estar vacío.");
        return false;
    }
    
    if (tieneMayusculas || tieneAcentos) {
        alert("El texto no debe contener mayúsculas ni acentos.");
        return false;
    }
    
    return true;
}

function copiarAlPortapapeles() {

    mensaje.select();
    mensaje.setSelectionRange(0, 99999);

    try {
        const exito = document.execCommand('copy');

        if (exito) {
            alert('Texto copiado al portapapeles');
        } else {
            alert('No se pudo copiar el texto');
        }
    } catch (err) {
        console.error('Error al copiar al portapapeles', err);
    }
}


btnCopiar.addEventListener('click', copiarAlPortapapeles);


function btnEncriptar(){

    const texto = textArea.value;
    if (verificarTexto(texto)){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        mensajeH6.style.display = "none";
        mensajeP.style.display = "none";
        btnCopiar.style.display = "inline"  
    }   

}

function btnDesencriptar(){

    const texto = textArea.value;
    if (verificarTexto(texto)){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        mensajeH6.style.display = "none";
        mensajeP.style.display = "none";
        btnCopiar.style.display = "inline"  
    }   
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    
    return stringEncriptado;
}

function desencriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    
    return stringEncriptado;
}




