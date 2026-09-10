const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2016
}

for (let i = 0; i < carro.length; i++) {
    console.log(carro[i])
}

carro.cor = "Preto";

console.log(carro)

delete carro.cor

console.log(carro)

export default exercicio11;