function verificarString(string){
    let analise = /([áàãâéèêíìóòõôúùũû])|([A-Z])|([ÁÀÃÂÉÈÊÍÌÓÒÕÔÚÙŨÛ])|([^\w\s.,!?])|([0-9])/;
    if(analise.test(string)){
      alert("Texto inválido! Use apenas letras minúsculas e com acento.")
      return true;
    }
};

function criptografar(){
        let text = document.getElementById("input").value;
        if(verificarString(text)){
            return;
        };
        text = text.replaceAll("e", "enter");
        text = text.replaceAll("i", "imes");
        text = text.replaceAll("a", "ai");
        text = text.replaceAll("o", "ober");
        text = text.replaceAll("u", "ufat");
        
        document.getElementById("img-compilador").hidden=true;
        document.getElementById("mensagem").innerHTML = text;
    };


function descriptografar(){
    let text = document.getElementById("input").value;
    if(verificarString(text)){
        return;
    };
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");

    document.getElementById("img-compilador").hidden=true;
    document.getElementById("mensagem").innerHTML = text;
}

function copiarMensagem() {
    var mensagemCopiar = document.getElementById("mensagem").innerText;
    navigator.clipboard.writeText(mensagemCopiar)};

    
function reiniciar(){
    var reiniciar = document.getElementById("reiniciar");
    location.reload();
    }