const readLine = require('prompt-sync')();
function separarcaracter(texto){
    let msg = "";
    for(let i = 0; i < texto.length; i++){
        letra = texto[i];
        if(i == texto.length-1)
            msg = msg + letra;
        else
            msg = msg + letra + "-"
    }
    console.log(msg)
}
function Main(){
    console.log("informe o texto para separar")
    let a = (readLine())
    separarcaracter(a);
}
Main()