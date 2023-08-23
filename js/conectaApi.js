async function listaVideos(){ // função assíncrona
    const conexao = await fetch("http://localhost:3000/videos") // espera o fetch ser resolvido e retorna uma promisse
    const conexaoConvertida = await conexao.json() // transforma response da constante conexão em um objeto .json

    return conexaoConvertida // retorna objeto json
}

export const conectaApi = {                
    listaVideos                                    // exporta função listaVideos()
}