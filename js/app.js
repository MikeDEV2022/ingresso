// Declaração de variaveis globais

let pista = 100;
let superior = 200;
let inferior = 400;

function comprar(){
    // Declaração local de variaveis

    let select = document.getElementById("tipo-ingresso");
    let qtd = document.getElementById("qtd").value;
    let meuSelected = select.options[select.selectedIndex].value;

    // Estrutura condicional
    if(qtd < 1 || qtd == null){
        alert("Digite a quantidade de ingresos que deseja comprar!")
    }else{
        if(meuSelected == "pista"){
            pista = pista - qtd;
            document.getElementById("qtd-pista").innerHTML = pista
        }else if(meuSelected == "superior"){
            superior = superior - qtd;
            document.getElementById("qtd-superior").innerHTML = superior
        }else if(meuSelected == "inferior"){
            inferior = inferior - qtd;
            document.getElementById("qtd-inferior").innerHTML = inferior
        }
    }
    verificaIngreso(pista,superior,inferior,meuSelected);
}

function verificaIngreso(pista,superior,inferior,meuSelected){
    if(meuSelected == "pista" && pista < 1){
        alert("Acabou os ingresos em pista");
        document.getElementById("qtd-pista").innerHTML = "0"
    }else if(meuSelected == "superior" && superior < 1){
        alert("Acabou os ingresos em superior");
        document.getElementById("qtd-superior").innerHTML = "0"
    }else if(meuSelected == "inferior" && inferior < 1){
        alert("Acabou os ingresos em inferior");
        document.getElementById("qtd-inferior").innerHTML = "0"
    }
} 