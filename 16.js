const readLine = require('prompt-sync')();
function TrianguloInvertido(numero){

    for(let linha = 1;linha<=numero;linha++){
        for(let coluna = 1;coluna<=linha;coluna++){

            if(coluna <= numero){
                process.stdout.write("* ")
            }
            else console.log("   ")
        }
        console.log()
    }
}
function Main(){
    console.log("informe o tamanho do triangulo invertido")
    let a = Number(readLine())
    TrianguloInvertido(a);
}
Main()