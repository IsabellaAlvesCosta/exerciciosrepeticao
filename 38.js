const readLine = require('prompt-sync')();
const alfabetoBinario = ["01100001","01100010","01100011","01100100","01100101","01100110","01100111","01101000","01101001","01101010", "01101011","01101100","01101101","01101110","01101111","01110000","01110001","01110010","01110011","01110100","01110101","01110110","01110111","01111000","01111001","01111010"]
const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function ConverterBinario(text){
    let binaries = ""
    for(let letter of text){
        let index = alfabeto.indexOf(letter.toLowerCase())
        binaries += alfabetoBinario[index] + " ";
    }
    return binaries;
}
function Main(){
    console.log("informe o texto a ser convertido para binario")
    let a = (readLine().toLowerCase())
    console.log(ConverterBinario(a))
}
Main()