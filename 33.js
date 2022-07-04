const readLine = require('prompt-sync')();
function TextoPalindromo(frase){
    let o = "";
    for(let i = frase.length -1 ;i >= 0; i--){
    o += frase[i];
}
        if (o == frase){ return "A palavra é um palindromo" }
    return "A palavra é não é um palindromo"
}
function Main(){
    console.log("Informe a frase")
    let a = (readLine().toLowerCase())
    console(TextoPalindromo(a))
}
Main()










