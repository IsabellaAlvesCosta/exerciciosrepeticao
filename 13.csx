public void Quadrado( int numero)
{
    for(int con = 1; con<=numero; con++)
    {
        for(int a = 1; a <=numero; a++)
        {
             Console.Write("* ");
        }
       Console.WriteLine();
    }

}

Quadrado(5);