public void escada(int limite){
    int limitees = limite;
    for(int qtdegrau = 1; qtdegrau <= limite; qtdegrau++){

        for(int espaco = 1; espaco <= limitees; espaco++){
            Console.Write(" ");
        }
        limitees--;


        int qtdnum = 1;
        while(qtdnum <= qtdegrau){
            Console.Write(qtdegrau + " ");
            qtdnum++;
            
        }
        Console.WriteLine();
    }
}

public void Main(){
    Console.WriteLine("escreva o número: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    escada(interacion);
}