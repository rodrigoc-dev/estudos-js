1.Como o if decide o caminho
o if checa uma condição, se algo for true, ou seja, se a condição verdadeira, ele executa determinada ação, se não for ele segue (de cima pra baixo) para a próxima checagem de condicional e na próxima, já se leva em conta o que foi visto na primeira (if) 

2.Pra que serve o else if e a regra de “cima pra baixo”
a regra de cima pra baixo como o nome já diz, verifica as condições na ordem de cima pra baixo, vendo se dá true em alguma das condições, quando for verdadeira, se executa o bloco em questão, o else if serve para quando se tem mais de dois caminhos para se checar as condições

3.O que é o &&
o && é um operador lógico que checa se duas condições são verdadeiras, ou seja, do lado esquerdo e direto precisarm ser true para atingir a condição comparativa &&

4.== x ===, com a explicação do “fiscal” que você entendeu hoje
o == é um "fiscal" preguiçoso que olha dois valores e compara independente do tipo, ele converte um dos valores para se equiparar ao outro, como por exemplo 5 == "5" , ele converte o string "5" para número e diz que a condição é true, já o === é um "fiscal" mais rigoroso, que checa além do valor o tipo, ele iria enxergar que 5 é um número e "5" é uma string, ou seja, parecem o mesmo valor, mas são tipos diferentes, o uso do === evita erros no código

5.O que é o || e a diferença pro &&
o || é o operador "ou" que confere se pelo menos uma das sentenças é verdadeira, se pelo menos uma das condições for true, então o resultado vai ser true, ou seja, verdadeiro. Já o operador lógico && precisa todas as condições sejam verdadeiras, tanto da esquerda quanto da direita, se pelo menos uma das duas não atender a necessidade de &&, o resultado é false , ou seja, falso

6.A lição do “golpe extra”: por que não precisa repetir a condição no else if
o golpe extra foi tentar reduzir a linha de código no else if, pois não há necessidade de repetir o que a condição if já verificou anteriormente, por exemplo, se vi que o número já é menor que 200, não há necessidade de colocar novamente isso em questão

7.As 3 partes do for
o for é dividido em 3 partes separadas por ; e a primeira é o início (dá início à contagem, a segunda é a condição que verifica se a condição é verdadeira e a última é o passo, qual ação deve ser tomada ali) e vai se repetindo (loop)enquanto a condição for true

8.O que é escopo (a lição do 11)
escopo é o contexto que a variável se encontra, por exemplo, uma let ou const vale pra dentro daquele escopo ou contexto em que ela foi criada, se foi dentro de chaves ou parenteses, ela vale pra aquele bloco em si

9.Por que a condição de filtro vai dentro do loop, e não na condição do for
pois o for é mais pra contagem e o filtro só vai filtrando como diz o nome, se a gente for usar o filtro dentro do for, ele pode acabar encerrando o loop de vez quando a condição for false