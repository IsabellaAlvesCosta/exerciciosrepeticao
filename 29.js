const readLine = require('prompt-sync')();
const vogais = ['a','e','i','o','u']

function checkVogal(text) {
    let quantasvogais = []
    for(let letra of text) {
        if(vogais.indexOf(letra.toLowerCase()) !== -1) {
            quantasvogais.push(letra.toLowerCase())
        }
    }
    for(let vogal of vogais) {
        if(quantasvogais.indexOf(vogal) === -1)
            return false
    }
    return true
}
function Main(){
    console.log("verifique se todas vogais estão no texto")
    let a = (readLine())
    console.log(checkVogal(a))
}
Main()