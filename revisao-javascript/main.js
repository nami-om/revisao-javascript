import exemplosVariaveis from "./scripts/variaveis.js";
import exemplosCondicionais from "./scripts/outros/condicionais.js";
import exemplosDatas from "./scripts/datas.js";
import exemplosObjetos from "./scripts/objetos.js";
import exemplosArrays from "./scripts/arrays.js";
import exemplosFuncoes from "./scripts/funcoes.js";

const btnVariaveis = document.getElementById("btn_variaveis");
btnVariaveis.addEventListener("click", exemplosVariaveis);

document.getElementById("btn_condicionais").addEventListener("click", exemplosCondicionais);
document.getElementById("btn_datas").addEventListener("click", exemplosDatas)
document.getElementById("btn_objetos").addEventListener("click", exemplosObjetos)
document.getElementById("btn_arrays").addEventListener("click", exemplosArrays)
document.getElementById("btn_funcoes").addEventListener("click", exemplosFuncoes)


