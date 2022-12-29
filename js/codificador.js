var crip = document.querySelector(".msg_cri");
var msg_crip_result= document.getElementById("caixaDescrImg");
var bCopiar = document.getElementById("botaoCopiar");




/*
function button_criptografar() {
   var msg_crip = crip.value;
   var msg_crip_result = msg_crip.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
   document.querySelector(".caixa_descr_img").textContent =  msg_crip_result ; 
}


 function button_descriptografar() {
   var msg_crip = crip.value;
   var msg_descrip_result = msg_crip.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
   document.querySelector(".caixa_descr_img").textContent = msg_descrip_result;
       
}*/



function button_criptografar() {
   var msg_crip = crip.value;
   var msg_crip_result = msg_crip.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
   document.querySelector(".caixa_descr_img").innerHTML = '<textarea readonly class="msg_cri" id="in_txt">' + msg_crip_result+ 
  '</textarea>' + '<input type="button" class="botao_copiar" id="copiar" onclick="copiar()" value="Copiar"></input>'
}


function button_descriptografar() {
   var msg_crip = crip.value;
   var msg_descrip_result = msg_crip.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
   document.querySelector(".caixa_descr_img").innerHTML='<textarea readonly class="msg_cri" id="in_txt">' + msg_descrip_result+ 
  '</textarea>' + '<input type="button" class="botao_copiar" id="copiar" onclick="copiar()" value="Copiar"></input>'
}







function copiar(){
    crip.value = msg_crip_result.textContent
    crip.select() 
    document.execCommand("copy");
    alert("Texto copiado.");
}  









/*
function limpa_tela() {
  document.getElementById("msg_caixa_descr").style.display = "none";
}
*/


