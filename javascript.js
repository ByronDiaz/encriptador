function encriptar(){

    var cadena = document.getElementById("texto").value;
    var ocultar = document.getElementById("muñeco").style.display="none";
    var ocultar = document.getElementById("ningunTexto").style.display="none";
    var ocultar = document.getElementById("textoVacio").style.display="none";
    var ocultar = document.getElementById("botonCopy").style.display="inline-block";
    var ocultar = document.getElementById("textoRespuesta").style.display="inline-block";

    cadena = cadena.replace(/e/ig, "enter")
    cadena = cadena.replace(/i/ig, "imes")
    cadena = cadena.replace(/a/ig, "ai")
    cadena = cadena.replace(/o/ig, "ober")
    cadena = cadena.replace(/u/ig, "ufat")
    

    console.log(cadena);
    document.getElementById("textoRespuesta").innerHTML = cadena;

}
function desencriptar (){
    var cadena1 = document.getElementById("texto").value;

    cadena1 = cadena1.replace(/enter/ig, "e")
    cadena1= cadena1.replace(/imes/ig, "i")
    cadena1 = cadena1.replace(/ai/ig, "a")
    cadena1 = cadena1.replace(/ober/ig, "o")
    cadena1 = cadena1.replace(/ufat/ig, "u")
    
    document.getElementById("textoRespuesta").innerHTML = cadena1;

    console.log(cadena1);

}

function copiar (){

    let texto = document.getElementById("textoRespuesta")
    texto.select();
    texto.setSelectionRange(0, 99999)
    document.execCommand('copy');

}



