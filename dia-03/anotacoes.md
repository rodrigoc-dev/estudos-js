1.Como o if decide o caminho
o if checa uma condição, se algo for true, ou seja, se a condição verdadeira, ele executa determinada ação, se não for ele segue (de cima pra baixo) para a próxima checagem de condicional e na próxima, já se leva em conta o que foi visto na primeira (if) 

2.Pra que serve o else if e a regra de “cima pra baixo”
a regra de cima pra baixo como o nome já diz, verifica as condições na ordem de cima pra baixo, vendo se dá true em alguma das condições, quando for verdadeira, se executa o bloco em questão, o else if serve para quando se tem mais de dois caminhos para se checar as condições

3.O que é o &&
o && é um operador lógico que checa se duas condições são verdadeiras, ou seja, do lado esquerdo e direto precisarm ser true para atingir a condição comparativa &&

4.== x ===, com a explicação do “fiscal” que você entendeu hoje
o == é um "fiscal" preguiçoso que olha dois valores e compara independente do tipo, ele converte um dos valores para se equiparar ao outro, como por exemplo 5 == "5" , ele converte o string "5" para número e diz que a condição é true, já o === é um "fiscal" mais rigoroso, que checa além do valor o tipo, ele iria enxergar que 5 é um número e "5" é uma string, ou seja, parecem o mesmo valor, mas são tipos diferentes, o uso do === evita erros no código 