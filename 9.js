const readLine = require('prompt-sync')();

function MultiplosNumeros(numeroinicial, multiplos){
    for(let a = 0; a<= multiplos; a+=numeroinicial){
        console.log(a)
    }
}
function Main(){
    console.log("### numeroinicial DECRESCENTE ###");
    console.log("escolha o numero inicial");
    let a = Number(readLine());
    console.log("escolha ate quando o numero vai ser multiplicado");
    let b = Number(readLine());
    MultiplosNumeros(a,b)
}
Main();