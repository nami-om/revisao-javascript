import usuarios from "./variaveis-exercicios"

function exercicio17() {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade < 18 && usuarios[i].temAnimalEstimacao == true) {
            console.log(usuarios[i])
        }
    }

}

export default exercicio17;