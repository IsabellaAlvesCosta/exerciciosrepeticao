const readLine = require('prompt-sync')();
function retangulo(linhas,colunas){
    for(linha=1; linha <= linhas; linha++){
        for(coluna=1;coluna <= colunas;coluna++){
            process.stdout.write("*");
        }
        console.log()
    }
}
function Main(){
    console.log("informe o tamanho da linha do retangulo")
    let a = Number(readLine())
    console.log("informe o tamanho da coluna do retangulo")
    let b = Number(readLine())
    retangulo(b,a);
}
Main()