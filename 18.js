const readLine = require('prompt-sync')();
function SomarPares(numero){

    var soma = 0;
    for(var i = 1; i <= numero; i++){
        if(i%2==0){
        soma = soma + i;
        }
    }
    console.log("A soma de todos os números até " + numero + " é " + soma)
}
function Main(){
    console.log("informe até onde os pares vão ser somados")
    let a = Number(readLine())
    SomarPares(a);
}
Main()