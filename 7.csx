public void ImparDecrescente(int numero)
{
    for(int con = 10; con >= numero; con--)
    {
        if(con % 2 == 1)
        {
            Console.WriteLine(con);
        }
    }
}

ImparDecrescente(1);