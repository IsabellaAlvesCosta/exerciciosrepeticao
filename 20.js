const readLine = require('prompt-sync')();

function Multiplicarate(Numero){
    var resultado = 1;
    for(var i = 1; i <= Numero; i++){
        resultado = resultado * i;
        console.log(i)
    }
    console.log("A Soma de todos os números até " + Numero + " é " + resultado);
}
function Main(){
    console.log("informe até onde eles vão ser multiplicados")
    let a = Number(readLine())
    Multiplicarate(a);
}
Main()