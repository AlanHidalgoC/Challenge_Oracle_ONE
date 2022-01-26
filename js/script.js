



function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoeEncriptado = texto.replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoeEncriptado;
    

   }




function desencriptar (){ 
	var texto = document.querySelector("#input-texto").value;
	var textoeEncriptado = texto.replace(/ai/gi, "a")
	.replace(/enter/gi, "e")
	.replace(/imes/gi, "i")
	.replace(/ober/gi, "o")
	.replace(/ufat/gi, "u"); 
	document.querySelector(".text-input-salida").value = textoeEncriptado; 
	


}



var botonEncriptar = document.querySelector("#btn-encriptar"); botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.querySelector("#btn-desencriptar"); botonDesencriptar.onclick = desencriptar;

function copy() {
  var copyText = document.querySelector("#msg");
  var texto = document.querySelector("#input-texto")
  copyText.select();
  document.execCommand("copy");
  texto.value="";
  texto.focus();

}

document.querySelector("#btn-copy").addEventListener("click", copy);


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
