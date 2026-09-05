function exemplosFuncoes() {
    console.log("rodando funções...")

    function gerarNumeroAleatorio() {
        return Math.random();
    }

    // Chamando a função armazenando o valor retornado
    const numero = gerarNumeroAleatorio();
    console.log(`O número gerado pela função é: ${numero}`);



    function somar(a, b) {
        return a + b;
    }

    // Chamando a função e armazenando o valor retornado
    var resultado = somar(5, 3);
    console.log(`Resultado da soma: ${resultado}`);





}


export default exemplosFuncoes;