async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json(); // transforma response da constante conexão em um objeto .json

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {// espera o fetch ser resolvido e retorna uma promisse
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

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}//agora vamos conseguir enviar valores para essa função que vao ser atribuidos a essas propriedades do body

export const conectaApi = {
    listaVideos,
    criaVideo
} // exporta funções