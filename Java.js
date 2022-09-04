var inputTexto = document.querySelector(".IngresarTexto");
var Mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    var caracteresEspeciales = ["!","#","$","%","&","/","(",")","=","?","¡","¿","*","+","-",".","{","}","-","_",",",";","ñ","á","é","í","ó","ú","ü"];
    if (inputTexto.value=="" ){   
        alert("Ingrese texto");   
    }  
    else{
        var textoEncriptado = encriptar(inputTexto.value);
        Mensaje.value= textoEncriptado;
        Mensaje.style.backgroundImage= "none";
        /*inputTexto.value= " ";*/  
    }   
    for (var caracterEs = 0; caracterEs < caracteresEspeciales.length; caracterEs++){
        if (inputTexto.value.includes(caracteresEspeciales[caracterEs])){
            alert("No se permiten acentos o carácteres especiales");
        }         
    }
}

function encriptar(PalabraEncriptada) {
    var llavesEncriptacion= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    PalabraEncriptada= PalabraEncriptada.toLowerCase();

    for (var index = 0; index < llavesEncriptacion.length; index++){
        if(PalabraEncriptada.includes(llavesEncriptacion[index][0])){
           PalabraEncriptada= PalabraEncriptada.replaceAll
           (llavesEncriptacion[index][0],llavesEncriptacion[index][1])
        }
    }
    return PalabraEncriptada;
}

function botonDesencriptar(){
    var caracteresEspeciales = ["!","#","$","%","&","/","(",")","=","?","¡","¿","*","+","-",".","{","}","-","_",",",";","ñ","á","é","í","ó","ú","ü"];
    if (inputTexto.value== ""){
        alert("Ingrese texto");  
    }
    else{
        var textoEncriptado = Desencriptar(inputTexto.value);
        Mensaje.value= textoEncriptado;
        Mensaje.style.backgroundImage= "none";
    }  
    for (var caracterEs = 0; caracterEs < caracteresEspeciales.length; caracterEs++){
        if (inputTexto.value.includes(caracteresEspeciales[caracterEs])){
            alert("No se permiten acentos o carácteres especiales");
        } 
    }     
}

function Desencriptar(PalabraDesencriptada) {
    var llavesEncriptacion= [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    PalabraDesencriptada= PalabraDesencriptada.toLowerCase();

    for (var index = 0; index < llavesEncriptacion.length; index++){
        if(PalabraDesencriptada.includes(llavesEncriptacion[index][0])){
            PalabraDesencriptada= PalabraDesencriptada.replaceAll
           (llavesEncriptacion[index][1],llavesEncriptacion[index][0])
        }
    }
    return PalabraDesencriptada;
}

function copiar(){
    Mensaje.select();
    navigator.clipboard.writeText(Mensaje.value);
    Mensaje.value= "";
}









