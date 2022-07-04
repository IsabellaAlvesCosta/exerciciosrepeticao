const readLine = require('prompt-sync')();
function SequenciaFibonacci(numero){
    if (numero < 1) return 0
    if (numero <= 2) return 1
    let t1 = 0
    let t2 = 1
    let t3 = numero
    for (let i = 2; i <= numero;i++){
        t3 = t2 + t1
        t1 = t2
        t2 = t3
    }
    return t3
}
function Main(){
    console.log("informe o numero para verificar qual posição da sequencia fibonacci ele se posiciona")
    let a = Number(readLine())
    console.log(SequenciaFibonacci(a));
}
Main()