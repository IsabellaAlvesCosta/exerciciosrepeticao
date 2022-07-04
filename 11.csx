public void Tabuada(int numero)
{
    for(int con = 1; con <=numero; con++)
    {
        int a = numero * con;
        Console.WriteLine(numero + " x " + con +" = " + a);
    }
}
Tabuada(5);