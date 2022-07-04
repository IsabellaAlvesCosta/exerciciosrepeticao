function NumeroPar(numero)
{
    for(let con = 0; con <= numero; con++)
    {
        if(con % 2 == 0)
        {
            console.log(con);
        }
    }
}

NumeroPar(10);