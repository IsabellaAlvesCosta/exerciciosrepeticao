const readLine = require('prompt-sync')();
function InverterNumero(num) {
	
       let x = num.toString() // transforma em string.
        .split('') // converte a string em um array com cada caracter.
        .reverse() // inverte a ordem do array.
        .join('') // reune o array em string.
// não sei como transformar em number dnv.
        return x;
}

function Main(){
        console.log("Informe os numeros para inverter")
        let a = readLine()
        console.log(InverterNumero(a))
    }
Main()