public void TrianguloI(int qtd)
{
    for(int linha = 1; linha <= qtd; linha++)
    {
        for(int c = qtd; c >= 1; c--)
        {
            if(linha >= c)
                Console.Write("* ");
            else
                Console.Write("  ");
        }
        Console.WriteLine();
    }
}
TrianguloI(5);