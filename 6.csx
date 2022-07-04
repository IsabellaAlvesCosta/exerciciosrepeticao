public void ParDecrescente(int numero)
{
    for(int con = 10; con >= numero; con--)
    {
        if(con % 2 == 0)
        {
            Console.WriteLine(con);
        }
    }
}

ParDecrescente(0);