public int SomarAte(int limite)
{
    int soma = 0;
    for(int i = 1; i<=limite; i++)
    {
        soma = soma+i;
    }
    return soma;
}

int a = SomarAte(5);
Console.WriteLine(a);