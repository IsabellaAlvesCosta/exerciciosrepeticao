public bool palin(string texto){
    var txt = "";
    for(var i = texto.Length - 1; i >= 0; i--){
        var letra = texto[i];
        txt = txt + letra;
    }
    var txtTo = txt.ToLower();
    if(txtTo == texto){
        return true;
    }
    else{
        return false;
    }
}
public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Console.ReadLine();
    Console.WriteLine(palin(interacion));
}

Main();