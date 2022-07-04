public double poten(int numero, int potencia)
{

    if (numero < 0 || potencia < 0)
    {
        throw new ArgumentException("apenas números positivos.");
    }

    if (potencia == 0)
    {
        return 1;
    }

    var conta = Math.Pow(numero, potencia);
    return conta;
}

public void Main(){
    Console.WriteLine("digite o número: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("digite o segundo número: ");
    var interacion_2 = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine(poten(interacion, interacion_2));
}