const readLine = require('prompt-sync')();
function Somarate(dado){
            var soma = 0;
            for(var i = 1; i <= dado; i++){
                soma = soma + i;
            }

            console.log("A soma de todos os números até " + dado + " é " + soma);
        }
        function Main(){
            console.log("informe até onde será somado")
            let a = Number(readLine())
            Somarate(a);
        }
Main()