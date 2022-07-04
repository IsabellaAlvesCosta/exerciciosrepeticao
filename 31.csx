public int cont(int numero, int ache){
    var qtd = 0;
    var num_to_string = Convert.ToString(numero);
    var ache_to_string = Convert.ToString(ache);
    for(var i = 0; i < num_to_string.Length; i++){
        var numeros = num_to_string[i];
        if(numero == ache){
            qtd++;
        }
    }
    return qtd;
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Digite abaixo: ");
    var interacion_2 = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine(cont(interacion, interacion_2));
}

Main();