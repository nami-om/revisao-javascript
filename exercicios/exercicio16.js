import usuarios from "./variaveis-exercicios"

function exercicio16() {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade >= 18) {
            console.log(usuarios[i])
        }
    }

}

export default exercicio16;