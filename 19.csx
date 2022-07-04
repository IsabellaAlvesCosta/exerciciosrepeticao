public int SomarImparAte(int limite)
{
    int soma = 0;
    for(int i = 1; i<=limite; i++)
    {
        if( i %2==1)
        soma = soma + i;
    }
    return soma;
}

int a = SomarImparAte(5);
Console.WriteLine(a);