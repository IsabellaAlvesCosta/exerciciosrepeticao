public bool strongPassword(string password){
    var qtdL = 0;
    var qtdA = 0;
    var qtdLe = 0;
    var pass = password;
    for(var i = 0; i < password.Length; i++){
        var letra = password[i];
        var ascii_Code = Convert.ToInt32(pass[i]);

        if(password.Length >= 8){
            qtdL++;
        }

        // dei exemplo de alguns caracteres, mas obviamente tem como botar mais, ex: 91 - 96.
        if(ascii_Code >= 33 && ascii_Code <= 47 || ascii_Code >= 58 && ascii_Code <= 64){
            qtdA++;
        }

        var letter = Convert.ToInt32(letra);
        if(letter >= 0){
            qtdLe++;
        }
    }

    if(qtdL >= 1 && qtdA >= 2 && qtdLe >= 2){
        return true;
    }
    else{
        return false;
    }
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Console.ReadLine();
    Console.WriteLine(strongPassword(interacion));
}

Main();
