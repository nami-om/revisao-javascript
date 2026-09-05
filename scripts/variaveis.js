function exemplosVariaveis() {
    console.log("variaveis.js rodando");

    const nome = 'João Silva'; // String
    const idade = 18; // Number
    const possuiFaculdade = true; // Boolean
    const time = 'Vasco' // String
    const comida = null; // Null
    const novoObjeto = {}; // Object
    const hoje = new Date(); // Date




    const gols = 1000;
    const frase = 'Pelé fez ' + gols + ' gols';



    // 'JavaScript é "super" fácil';
    // "JavaScript é 'super' fácil";
    // "JavaScript é \"super\" fácil";
    // `JavaScript é "super" fácil"`;
    //"JavaScript é "super" fácil"; = Inválido



    // const numeroUm = prompt("Informe um número:");
    // const numeroDois = prompt("Informe seu animal:");

    // if(isNaN(numeroUm) & isNaN(numeroDois)){
    //     alert('Por favor, digite apenas números')
    // }
    // const resultado = numeroUm + numeroDois;
    // alert(resultado)


    const expoente = 3 ** 2; // 9 "Ao Quadrado"
    const modulo = 15 % 2; // 1"Resto da divisão"

    const soma = '100' + 50; // 10050
    const subtracao = '100' - 50; // 50
    const multiplicacao = '100' * '2'; // 200
    const divisao = 'Blabla 100' / 2; // NaN (Not a Number)

    // É possível verificar se uma variável é NaN ou não com a função isNaN()
    const numero = 70;
    const unidade = 'kg';
    const peso = numero + unidade; // '80kg'
    const pesoPorDois = peso / 2; // NaN pq tem a String


    let incremento = 5; //com const não funciona
    console.log(incremento++); // 5
    console.log(incremento); // 6

    let incremento2 = 5;
    console.log(++incremento2); // 6
    console.log(incremento2); // 6



}


export default exemplosVariaveis;