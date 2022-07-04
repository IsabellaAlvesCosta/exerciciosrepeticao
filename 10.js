const readLine = require('prompt-sync')();

function Dobro(numero){
    for(let cont=1; cont <= numero; cont++){
        console.log("o dobro de " + cont + " é " + cont*2);
    }
}
function Main(){
    console.log("programa do dobro rs")
    console.log("adicione o até onde vai a 'tabuada' ")
    let a = Number(readLine())
    Dobro(a);
}
Main();