function ParDecrescente(numero)
{
    for(let con = 10; con >= numero; con--)
    {
        if(con % 2 == 0)
        {
            console.log(con);
        }
    }
}

ParDecrescente(0);