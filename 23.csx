public void Triangulo(int tamanho)
{
    for(int altura = 1; altura <= tamanho; altura++)
    {
        for(int largura = 1; largura < altura; largura++)
        {
            Console.Write("1 ");
        }
        Console.WriteLine(" ");
    }
}
Triangulo(5);