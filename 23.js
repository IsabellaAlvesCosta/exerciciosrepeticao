const readLine = require('prompt-sync')();

function Triangulo(tamanho){

    for(let la = 1; la <= tamanho; la++){
    for(let be = 1; be <= la; be++){
        process.stdout.write(`${la}`)
    }
    console.log()
}
}
function Main(){
    console.log("informe o tamanho do triangulo")
    let x = Number(readLine())
    Triangulo(x);
}
Main()