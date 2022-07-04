public bool texto(string frase){
    var qtdA = 0;
    var qtdE = 0;
    var qtdI = 0;
    var qtdo = 0;
    var qtdU = 0;
    for(var i = 0; i < frase.Length; i++){
        var letra = frase[i];
        if(letra == 'a'){
            qtdA++;
        }
        else if(letra == 'e'){
            qtdE++;
        }
        else if(letra == 'i'){
            qtdI++;
        }
        else if(letra == 'o'){
            qtdo++;
        }
        else if(letra == 'u'){
            qtdU++;
        }
    }
    if(qtdA < 1 || qtdE < 1 || qtdI < 1 || qtdo < 1 || qtdU < 1){
        return false;
    }
    return true;
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Console.ReadLine();
    Console.WriteLine(texto(interacion));
}

Main();