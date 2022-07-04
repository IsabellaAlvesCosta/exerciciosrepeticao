public int contar(string n)
{
    int x = 0;
    for(int y = 1; y < n.Length; y++)
    {
        char z = n[y];
        if(z == 'a' || z == 'e' || z == 'i' || z == 'o' || z == 'u')
        {
            x++;
        }
    }
    return x;
}

int x = contar ("bora programar");
Console.WriteLine(x);