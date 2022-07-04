const readLine = require('prompt-sync')();

function Tabuada(numero){
    let cont = 1
    while (cont <= 10) {
        console.log(numero + " x " + cont + " = " + numero*cont)
        cont++
    }
}
function Main(){
    console.log("informe o numero da tabuada")
    let a = Number(readLine())
    Tabuada(a);
}
Main()