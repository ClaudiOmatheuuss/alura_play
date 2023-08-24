async function listaVideos(){ // função assíncrona
    const conexao = await fetch("http://localhost:3000/videos") // espera o fetch ser resolvido e retorna uma promisse
    const conexaoConvertida = await conexao.json() // transforma response da constante conexão em um objeto .json

    return conexaoConvertida // retorna objeto json
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://www.localhost:3000/videos" , {
        method: "POST" , //define metodo de requisição como metodo POST
        Headers: {
            "Content-type" : "application/json"       //especifica tipo de arquivo que está sendo enviado ou recebido  
        },
        body: JSON.stringify({ //envia objeto de valores json em forma de string
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,    //dados que queremos cadastrar: titulo, descricao, url, imagem
            url: url,
            imagem: imagem
        })
    })
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
} //agora vamos conseguir enviar valores para essa função que vao ser atribuidos a essas propriedades do body

export const conectaApi = {                
    listaVideos ,        
    criaVideo                           // exporta função listaVideos()
}