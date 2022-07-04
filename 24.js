const readLine = require('prompt-sync')();

function Triangulo(tamanho){

    let valor = 1;
    for(let linha = 1; linha <= tamanho; linha++){
        for(let coluna = 1; coluna <= linha; coluna++){
            process.stdout.write(`${valor} `)
            valor++
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