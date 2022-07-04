const readLine = require('prompt-sync')();
function Triangulo(tamanho){

    for(let linha =1; linha <= tamanho; linha++){
        process.stdout.write("+")
        for (let contador = 1; contador < linha; contador++) {
            process.stdout.write("+");
            
        }
        console.log()
    }
}
function Main(){
    console.log("informe o tamanho do triangulo")
    let a = Number(readLine())
    Triangulo(a);
}
Main()