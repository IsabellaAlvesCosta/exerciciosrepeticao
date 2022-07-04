public int SomarParAte(int limite)
{
    int soma = 0;
    for(int i = 1; i<=limite; i++)
    {
        if( i %2==0)
        soma = soma + i;
    }
    return soma;
}

int a = SomarParAte(5);
Console.WriteLine(a);