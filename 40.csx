public int fibo(int position){
    int[] fibonacci = new int[11]{1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89};
    return fibonacci[position -1];
}

public void Main(){
    Console.WriteLine("Digite abaixo: ");
    var interacion = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine(fibo(interacion));
}

Main();