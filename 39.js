const readLine = require('prompt-sync')();
function isPrime(num){
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    if (num > 1){
        return true;
    }
}
function Main(){
    console.log("informe o numero para verificar se ele é primo ou não")
    let a = Number(readLine())
    console.log(isPrime(a));
}
Main()