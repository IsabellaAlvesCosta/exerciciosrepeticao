const readLine = require('prompt-sync')();
function Triangulo(tamanho){

    var espacolinhamaior = (tamanho*2)-1;
    var numeroponto = 1;
    var numero = 1;
    var quantidadeespacos = espacolinhamaior/2;
    for(var linhaatual = 1; linhaatual <= tamanho; linhaatual++){ 
        console.log(" ".repeat(quantidadeespacos) + String(numero).repeat(numeroponto))
        numeroponto += 2;
        numero++;
        quantidadeespacos--;
    }
}
function Main(){
    console.log("informe o tamanho do triangulo")
    let a = Number(readLine())
    Triangulo(a);
}
Main()