public int contar(string n, string m)
{
    int x = 0;
    for(int y = 1; y < n.Length; y++)
    {
        char z = n[y];
        if(z = m)
        {
            x++;
        }
    }
    return x;
}

int x = contar ("bora programar", "a");
Console.WriteLine(x);