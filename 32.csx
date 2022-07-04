public string inverter(string texto){
    var txt = "";
    for(var i = texto.Length - 1; i >= 0; i--){
        var letra = texto[i]; 
        txt = txt + letra;
    }
    return txt;
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Console.ReadLine();
    Console.WriteLine(inverter(interacion));
}

Main();