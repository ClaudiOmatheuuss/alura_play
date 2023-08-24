import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();//evita comportamento padrão de recarregamento da página quando o evento de submit acontecer

    const imagem = document.querySelector("[data-imagem]").value;//seleciona e armazena valor do input da imagem do video
    const url = document.querySelector("[data-url]").value;//seleciona e armazena valor do input da url do video
    const titulo = document.querySelector("[data-titulo]").value;//seleciona e armazena valor do input do titulo do video
    const descricao = Math.floor(Math.random() * 10).toString();//gera número inteiro aleatório em formato de string para a descrição do vídeo
    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html"; //caso o usuário consiga criar o vídeo é redirecionado   
    } catch(e){
//      alert(e)
        window.location.href = "../pages/envio-cancelado.html" //quando a criação de vídeo tiver algum erro o usuário é redirecionado
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento)) // adciona escutador de evento que vai executar a função criarVideo com o evento como parametro quando o mesmo acontecer