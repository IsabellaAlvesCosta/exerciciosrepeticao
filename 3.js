function NumeroImpar(numero)
{
    for(let con=1; con<=numero; con++)
    {
        if(con % 2 == 1)
        {
            console.log(con);
        }
    }
}

NumeroImpar(12);