public string primo(int num){
    var msg = "";
    var qtd = 0;
    var divisor = 1;
    for(var i = 0; i <= num; i++){
        if(num % divisor == 0){
            qtd++;
        }
        divisor++;
    }
    if(qtd == 2){
        msg = "primo";
        
    }
    else{
        msg = "não primo";
    }
    return msg;
}
public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine(primo(interacion));
}

Main();
