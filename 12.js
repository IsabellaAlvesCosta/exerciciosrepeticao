const readLine = require('prompt-sync')();
function Desenhodalinha(tamanho){

    let linha = 1
    for(let linha =1; linha <= tamanho; linha++){
        process.stdout.write("+")
    }
}
function Main(){
    console.log("informe o tamanho da linha")
    let a = Number(readLine())
    Desenhodalinha(a);
}
Main()