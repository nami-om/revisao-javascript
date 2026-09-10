import usuarios from "./variaveis-exercicios"

function exercicio18() {
    let listaString = []
    for (let i = 0; i < usuarios.length; i++) {
        listaString.push(`${usuarios[i].nome} ${usuarios[i].sobrenome}`)
    }
    console.log(listaString)
}

export default exercicio18;
