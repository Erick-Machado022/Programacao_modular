// não é como Node/JS -> import e export
// visibilidade (público, privado, interno)
// Java,C#,..., encapsular os métodos
// static => não gera objetos
static class Cambio
{
    // contrato estrito, melhor que: 
    // public static int Converte(int valor, string moeda)
    public static void Converte(ref Dinheiro pila)
    {
        if (pila.moeda == Moeda.USD) 
        {
            pila.valor *= 4.9M;
            pila.moeda = Moeda.BRL;

        };

        //return pila;
    }

    public static void zerar(ref int valor)
    {
        valor = 0;
    }
}

