function validar(string) {
    let resultado = 0
    if (string <= 5) {
        resultado = "curta"
    } else if (string <= 10) {
        resultado = "média"
    } else if (string > 10) {
        resultado = "longa"
    }
}

let palavra
palavra = prompt("Digite a palavra")
validar(palavra)
console.log(resultado)

export default exercicio10;