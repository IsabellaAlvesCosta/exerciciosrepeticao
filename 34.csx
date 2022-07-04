public string inverter(int texto){
    var txt = "";
    var textoTo = Convert.ToString(texto);
    for(var i = textoTo.Length - 1; i >= 0; i--){
        var letra = textoTo[i]; //b
        txt = txt + letra;
    }
    return txt;
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine(inverter(interacion));
}

Main();