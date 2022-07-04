const readLine = require('prompt-sync')();
function potencia(numero,expoente){
    if(expoente < 0 || numero < 0)
    throw new Error("EXPOENTE NAO PODE SER NEGATIVO IDIOTA");
    
    var resultado = 1;
    for(var i = 1; i <= expoente; i++){
        resultado = resultado * numero;
    }
    console.log(`potência de ${numero} elevado a ${expoente} => ${resultado}`)
}
function Main(){
    console.log("informe o primeiro numero")
    let a = Number(readLine())
    console.log("informe o exponte da potencia")
    let b = Number(readLine())
    potencia(a,b);
}
Main()