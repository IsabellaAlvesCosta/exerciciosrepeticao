const readLine = require('prompt-sync')();
function quantasvogais(texto){
    let qntd = 0;
    for (i = 0; i < texto.length; i++){
        let letra = texto[i];
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
        qntd++
    }
    console.log(qntd)
}
function Main(){
    console.log("verifique a quantidade de vogais")
    let a = (readLine())
    quantasvogais(a);
}
Main()