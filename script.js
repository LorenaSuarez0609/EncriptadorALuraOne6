var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector(".contenedor-respuesta");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultar();
    var textoEncriptar = extraerTexto();
    resultado.textContent = encriptarTexto(textoEncriptar);
}
function desencriptar() {
    ocultar();
    var textoEncriptar = extraerTexto();
    resultado.textContent = desencriptarTexto(textoEncriptar);
}
function extraerTexto(){
    var textoEncriptar = document.querySelector(".caja-texto");
    return textoEncriptar.value;
}
function ocultar(){
    //oculto imagen
    document.getElementById("imagen-buscador").style.visibility="hidden";
    //oculto texto
    document.getElementById("contenedor-mensaje").style.visibility="hidden";  
    //mostrar boton copiar
    document.getElementById("btn-copiar").style.visibility="visible";
}
function encriptarTexto(textoMensaje){
    var texto = textoMensaje;
    var textoFinal ="";
    for(var i=0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }   
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
            }
    }
    return textoFinal;
}

function desencriptarTexto(textoMensaje){
    var texto = textoMensaje;
    var textoFinal ="";
    for(var i=0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }   
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
            }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
        btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".contenedor-respuesta").textContent;
        navigator.clipboard.writeText(contenido);
        }
        );
    