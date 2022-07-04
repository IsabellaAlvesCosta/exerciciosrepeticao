const readLine = require('prompt-sync')();
function Invertercaracter(frase){
        let o = "";
    for(let i = frase.length -1 ;i >= 0; i--){
        o += frase[i];
    }
    console.log(o)
}
function Main(){
    console.log("Informe a frase")
    let a = readLine()
    Invertercaracter(a)
}
Main()
