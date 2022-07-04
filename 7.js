function contar (n)
{
    let x = 9;
    while(x >= n)
    {
        Console.WriteLine(x);
        x-= 2;
    }
}

function main()
{
    try{
        console.log("### contar até ###");
        console.log("fala um numero ai patrão");
        let x = Number(readLine());

        contar(x);
    }
    catch(err) {
        console.log("deu ruim");
        console.log(Message);
    }
}

main();