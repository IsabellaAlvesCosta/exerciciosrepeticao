public string text(string nome){
    string strings = "";
    var len = nome.Length;
    for(var i = 0; i < len; i++){
        var letra = nome[i];
        strings = strings + letra + "-";
    }
    return strings;
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Console.ReadLine();
    Console.WriteLine(text(interacion));
}

Main();