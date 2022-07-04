public void contar(int n)
{
    int x = 1;
    for(int y = 1; y<n; y++)
    {
        for(int z = 1; z<y; z++)
        {
            Console.Write($"{ x }");
            x++;
        }
        Console.WriteLine();
    }
}

public void Main()
{
    try{
        Console.WriteLine("PROGRAMA 24");
        Console.WriteLine("Digite um número");
        int x = Convert.ToInt32(Console.ReadLine());

        contar(x);
    }
    catch(Exception ex) {
        Console.WriteLine("deu ruim");
        Console.WriteLine(ex.Message);
    }
}

Main();