const readLine=require('prompt-sync')();

function Losango(linhas){

    var espacolinhamaior = (linhas*2)-1;
    var numeroponto = 1;
    var quantidadeespacos = espacolinhamaior/2;
    for(var linhaatual = 1; linhaatual <= linhas; linhaatual++){ 
        console.log(" ".repeat(quantidadeespacos) + "*".repeat(numeroponto))
        numeroponto += 2;
        quantidadeespacos--;
    }

    quantidadeespacos = 1;
    for(numeroponto -=4 ; numeroponto >= 1;numeroponto-=2){
        console.log(" ".repeat(quantidadeespacos) + "*".repeat(numeroponto))
        quantidadeespacos += 1;
    }
}
function Main(){
    console.log("informe o tamanho do losango")
    let a = Number(readLine())
    Losango(a);
}
Main()