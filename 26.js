const readLine = require('prompt-sync')();

function Triangulo(totalLinhas){

    const espacoMaior = (totalLinhas*2) - 1
    
    for(let linhaAtual = 1; linhaAtual <= totalLinhas; linhaAtual++) {
        // ADICIONAR ESPAÇOS
        let numeroValores = (linhaAtual*2) - 1 
        let numeroCaracteres = (numeroValores*2) - 1
    
        let espacoAtual = espacoMaior - numeroCaracteres / 2
    
        process.stdout.write(' '.repeat(espacoAtual))
    
        for(let numero = linhaAtual; numero > 1; numero--) {
            process.stdout.write(` ${numero}`)
        }
        process.stdout.write(' 1')
        for(let numero = 2; numero <= linhaAtual; numero++) {
            process.stdout.write(` ${numero}`)
        }
        console.log()
    }
    
}
function Main(){
    console.log("informe o tamanho do triangulo")
    let x = Number(readLine())
    Triangulo(x);
}

Main();