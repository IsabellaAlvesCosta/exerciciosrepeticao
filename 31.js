const readLine = require('prompt-sync')();
function quantosnumero(numero, repeticao){
    let vogal = repeticao;
    let qntd = 0;
    for(i = 0; i < numero.length; i++){
    let repeticao2 = numero[i];
        if (vogal == repeticao2){
        qntd++
        }
    }
    console.log(qntd)
}
function Main(){
    console.log("informe os numeros")
    let a = (readLine());
    console.log("informe o numero que será buscado")
    let b = (readLine());
    quantosnumero(a,b)
}
Main()