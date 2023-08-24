import { conectaApi } from "./conectaApi.js"
import constroiCard from "./mostrarVideos.js" //importa funcao constroiCard

async function buscarVideo(evento){
    evento.preventDefault()
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value //seleciona valor do input
    const busca = await conectaApi.buscaVideo(dadosDePesquisa) //espera promisse da funcao buscaVideo ser resolvida
    
    const lista = document.querySelector("[data-lista]") //seleciona data-atribute referente a nossa ul de vídeos
    
    while (lista.firstChild){ //enquanto a lista tiver o primeiro filho
        lista.removeChild(lista.firstChild) //remover seu primeiro filho
    }    

    busca.forEach(elemento => lista.appendChild( //para cada elemento de busca chama a funcao constroiCard com seus atributos
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0){
        lista.innerHTML = `<div class="div__mensagem">
        <img src="./img/erro.png" class="mensagem__imagem">
        <h2 class="mensagem__titulo">Vídeo não encontrado!</h2>
        </div>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]") //seleciona botao de pesquisa
botaoDePesquisa.addEventListener("click" , evento => buscarVideo(evento)) //ouvinte de evento