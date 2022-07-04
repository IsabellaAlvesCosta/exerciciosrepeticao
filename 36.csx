public string ascii(string texto) {
    var txt = "";
    var text = texto;
    for (var i = 0; i <= texto.Length - 1; i++) {
        var asc = Convert.ToInt32(texto[i]);
        txt = txt + " " + asc;
    }
    return txt;
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Console.ReadLine();
    Console.WriteLine(ascii(interacion));
}

Main();