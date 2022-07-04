public void ConverterBinario(string text){
   string ret = "";
 
foreach (char c in text)
{
    int asc = (int)c;
    ret += Convert.ToString(asc, 2) + " ";
}
Console.WriteLine(ret);
string[] strBin = ret.Trim().Split(' ');
string rec = "";
 
foreach (string ele in strBin)
{
    char car = (char)Convert.ToInt32(ele, 2);
    rec += car;
}
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    string a = Convert.ToString(Console.ReadLine());
    ConverterBinario(a);
}
Main();