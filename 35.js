const readLine = require('prompt-sync')();
function NumeroPalindromo(num){
    let o = "";
    for(let i = num.length -1 ;i >= 0; i--){
    o += num[i];
}
        if (o == num){ return "O numero é um palindromo" }
    return "O numero não é um palindromo"
}
function Main(){
    console.log("Informe os numeros para verificar se é um palindromo")
    let a = Number(readLine())
    console.log(NumeroPalindromo(a))
}
Main()