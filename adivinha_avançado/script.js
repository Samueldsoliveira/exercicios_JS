var segredos = [5,7,10,2,3];

var input = document.querySelector("input");
input.focus(); //Serve para ja deixar o campo input preparado para ser escrito

function verifica(){

    var achou = false;

    for(var posicao = 0; posicao < segredos.length; posicao++){
        if(input.value == segredos[posicao]){
            alert("Você ACERTOU!");
            achou = true;
            break;
        } 
    }
    if(achou == false){
        alert("Você errou!");
    }

    input.value="";
    input.focus(); 
}

var button = document.querySelector("button");
button.onclick = verifica;

