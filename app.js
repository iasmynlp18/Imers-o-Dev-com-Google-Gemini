function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let nome = "";
    let descricao = "";
   
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += 
            `<div>
                <h2>${dado.nome}</h2>
                <p>${dado.descricao}</p>  
                <a href="${dado.link}" target="_blank">Ouça no Spotify</a>
            </div>
            `;
        }
    }
  
    if (!resultados) {
        resultados = "Nada foi encontrado";
    }
  
    section.innerHTML = resultados;
  }
  