function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    if (campoPesquisa == "") {
      section.innerHTML = "Nada foi encontrado"
      return
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // se titulo inclui campoPesquisa
      if (dado.titulo.includes(campoPesquisa)) {
        // cria um novo elemento
      resultados += ` <div class="item-resultado">
          <h2>
            <a href="#">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div> `;
      }
    }
    // Atribui o HTML gerado para o conteúdo interno da seção
    section.innerHTML = resultados;
  }


