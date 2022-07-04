public void Triangulo(int tamanho)
{
    for(int altura = 1; altura <= tamanho; altura++)
    {
        for(int largura = 1; largura < altura; largura++)
        {
            Console.Write("* ");
        }
        Console.WriteLine("* ");
    }
}
Triangulo(5);