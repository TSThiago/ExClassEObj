Projeto Corrida
1. Crie uma classe Carro com as seguintes propriedades:
● Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
● Potência - número de cavalos de potência do carro;
● Velocidade Máxima - qual a maior velocidade que o carro pode alcançar;
● Aceleração - o tempo em segundos que o carro leva para ir de 0 a 100 km/h
2. Adicione na classe carro um método que recebe como parâmetro uma distância em
metros e calcula o tempo em segundos para percorrer essa distância. Use a
seguinte fórmula para o cálculo: resultado = distância / (Velocidade Máxima /
Aceleração). A função deve retornar esse resultado.
3. Crie alguns objetos da classe Carro e adicione-os em um array
4. Crie uma classe Corrida com as seguintes propriedades:
● Nome - nome do local da corrida;
● Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
● Distância - o total em metros da corrida;
● Vencedor - qual a equipe que ganhou a corrida;
5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
nome da equipe que fez o menor tempo na propriedade “Vencedor”.
6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
corrida.
7. Crie um objeto da classe Corrida e chame seus métodos.

Biblioteca
1. Crie uma classe Livro com as seguintes propriedades:
● Titulo - qual o nome do livro;
● Autor- quem escreveu o livro;;
● Editora - qual empresa que publicou o livro;
● Ano de publicação - o ano em que o livro foi publicado
● Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);
2. Crie alguns objetos da classe Livro e adicione-os em um array;
3. Crie uma classe Biblioteca com as seguintes propriedades:
● Nome - nome da biblioteca;
● Endereco - onde a biblioteca fica localizada;
● Telefone - telefone de contato da biblioteca
4. Adicione na classe Biblioteca um método para buscar um livro específico, deve
passar como parâmetro o nome do livro e exibir no console todas as informações
de um livro;
5. Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser
passado como parâmetro o nome do livro, então verificar a disponibilidade e se
estiver disponível retornar true e trocar o valor da propriedade do livro para false, se
não estiver disponível retornar false.
6. Adicione na classe Biblioteca um método de devolução de um livro, deve ser
passado como parâmetro o nome do livro, então trocar o valor da propriedade de
disponibilidade desse livro para true;
7. Crie um objeto da classe Biblioteca e chame seus métodos.