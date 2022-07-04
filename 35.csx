public bool palin(int texto){
    var invert = "";
    var toString = Convert.ToString(texto);
    for(var i = toString.Length - 1; i >= 0; i--){
        var letra = toString[i];
        invert = invert + letra;
    }
    if(invert == toString){
        return true;
    }
    else{
        return false;
    }
}


public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine(palin(interacion));
}

Main();