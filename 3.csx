public void NumeroImpar(int numero)
{
    for(int con=1; con<=numero; con++)
    {
        if(con % 2 == 1)
        {
            Console.WriteLine(con);
        }
    }
}

NumeroImpar(12);