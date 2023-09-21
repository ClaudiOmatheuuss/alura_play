async function listaVideos() {
    const conexao = await fetch("https://my-json-server.typicode.com/cawndjhs/videos-api/videos");
    const conexaoConvertida = await conexao.json(); // transforma response da constante conexão em um objeto .json

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("https://my-json-server.typicode.com/cawndjhs/videos-api/videos", {// espera o fetch ser resolvido e retorna uma promisse
        method: "POST",//define metodo de requisição como metodo POST
        headers: {
            "Content-type": "application/json" //especifica tipo de arquivo que está sendo enviado ou recebido  
        },
        body: JSON.stringify({//envia objeto de valores json em forma de string
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,    //dados que queremos cadastrar: titulo, descricao, url, imagem
            url: url,
            imagem: imagem
        })
    });
//    if(!conexao.ok){ //se a requisicao de conexao for rejeitada será criado um
//        throw new Error("Não foi possível adicionar o vídeo")
//    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}//agora vamos conseguir enviar valores para essa função que vao ser atribuidos a essas propriedades do body

async function buscaVideo(termoDeBusca){ //faz resquisição get para obter elemento(s) na API de acordo com o valor de termoDeBusca
    const conexao = await fetch(` https://my-json-server.typicode.com/cawndjhs/videos-api/videos?q=${termoDeBusca} `)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
} // exporta funções dentro da constante conectaApi