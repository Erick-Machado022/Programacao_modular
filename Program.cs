// See https://aka.ms/new-console-template for more information

Moeda m = Moeda.BRL;

// struct Int32 => valores
int dia = 6;
// class string => objetos
string diaDaSemana = "quarta-feira";
// dados simples, escalares (int, double, bool)
// composição de dados
Dinheiro din1 = new Dinheiro {
    valor = 10,
    moeda = Moeda.USD 
};

var din2 = new Dinheiro
{
    valor = 20,
    moeda = Moeda.EUR
};

Dinheiro din3 = new()
{
  valor = 30,
  moeda = Moeda.CAD
};

Cambio.Converte(ref din1);
//Console.WriteLine(resposta.moeda + " " + resposta.valor); // 49.0
Console.WriteLine(din1.moeda + " " + din1.valor);

int x = 5;
Cambio.zerar(ref x);

Console.WriteLine(x);

