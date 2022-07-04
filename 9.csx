public void NaturalMultiplo(int multiplo, int limite)
{
    for(int con = 0; con <= limite; con++)
    {
        if(con % multiplo == 0)
        {
            Console.WriteLine(con);
        }
    }
}

NaturalMultiplo(3, 10);