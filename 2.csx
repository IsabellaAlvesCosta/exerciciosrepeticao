public void NumeroPar(int numero)
{
    for(int con = 0; con <= numero; con++)
    {
        if(con % 2 == 0)
        {
            Console.WriteLine(con);
        }
    }
}

NumeroPar(10);