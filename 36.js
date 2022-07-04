const readLine = require('prompt-sync')();
function ConverterAscii(frase){
    let ascii = []
    for(let letter of frase){
        ascii.push(letter.charCodeAt())
    }
    return ascii
}
function Main(){
    console.log("Informe a frase pra converter para ascii")
    let a = (readLine().toLowerCase())
    console.log(ConverterAscii(a))
}
Main()