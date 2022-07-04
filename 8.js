function contar (n, m)
{
    while(n >= m)
    {
        Console.WriteLine(n);
        n--;
    }
}

function main()
{
    try{
        console.log("### contar até ###");
        console.log("DIGITE UM NÚMERO");
        let x = Number(readLine());
        console.log("DIGITE UM NÚMERO");
        let y = Number(readLine());

        contar(x,y);
    }
    catch(err) {
        console.log("deu ruim");
        console.log(Message);
    }
}

main();