
/* tudo o que queremos que aconteça quando ela for chamada
fica entre chaves */
function pesquisar() {

    // document para acessar o documento html
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // deixa o conteudo digitado em letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase();
    document.getElementById("campo-pesquisa").value = "";
    
    let resultados = "";
    let nome = "";
    let artista = "";

    // para cada dado dentro da lista de dados, a mesma estrutura vai se repetir 
    for (let dado of dados) {
        // deixa ambos com letras minusculas
        nome = dado.nome.toLowerCase();
        artista = dado.artista.toLowerCase();
        
        // se dado.nome/artista tiver o que for escrito no campo pesquisa a estrutura html é impressa na tela
        if (nome.includes(campoPesquisa) || artista.includes(campoPesquisa)) {
            
            /* tudo o que queremos imprimir para cada elemento
            += para uma estrutura não sobrepor a outra, assim elas vão se somar */
            resultados += 
            `<div>
                <h2>${dado.nome}</h2>
                <p>${dado.artista}</p>  
                <a href="${dado.link}" target="_blank">Ouça no Spotify</a>
            </div>`;
        }
    }
    
    if (!resultados) {
        resultados = "Nada foi encontrado";
    }

    /* pra não ter que ficar chamando a section toda vez que o loop iterar, 
    criamos uma variável resultados vazia que vai receber a cada loop a mesma 
    estrutura e depois atribuimos a section essa variável já com todos os resultados
    do for */
    section.innerHTML = resultados;
}
