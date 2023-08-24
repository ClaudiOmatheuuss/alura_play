import { conectaApi } from "./conectaApi.js"; //importa constante conectaApi que armazena função listaVideos

const lista = document.querySelector("[data-lista]"); //seleciona nosso data-atributte

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");         //atribui criação de elemento list-item
    video.className = "videos__item"; // atribui a essa constante a seguinte classe
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`//insere conteudo html na constante

    return video;//retorna(exibe) elemento
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();// espera o que o listaVideos retornar e armazena na const lista
    listaApi.forEach(elemento => lista.appendChild( //para cada elemento em listaApi ele vai ser filho da ul com o data-atribute lista
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) //para cada filho de lista é atribuida a função constroiCard
}

listaVideos();