const readLine = require('prompt-sync')();
function DesenharQuadrado(tamanho){

    for (linha = 1;linha <=tamanho; linha++){
    for (contador = 1; contador <=tamanho; contador++){
        process.stdout.write("*");
    }
    console.log()
}
}
function Main(){
    console.log("informe o tamanho do quadrado")
    let a = Number(readLine())
    DesenharQuadrado(a);
}
Main()