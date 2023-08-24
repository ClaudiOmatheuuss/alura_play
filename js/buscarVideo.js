import { conectaApi } from "./conectaApi.js"

async function buscarVideo(evento){
    evento.preventDefault()
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value //seleciona valor do input
    const busca = await conectaApi.buscaVideo(dadosDePesquisa) //espera promisse da funcao buscaVideo ser resolvida

    console.log(busca) //imprime resultado no console
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]") //seleciona botao de pesquisa

botaoDePesquisa.addEventListener("click" , evento => buscarVideo(evento))