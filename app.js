function pesquisar () {
  // Loga uma mensagem no console para indicar que o botão foi clicado
  console.log("clicou");

 let campoPesquisa = document.getElementById ("campo-pesquisa").value


 if (!campoPesquisa) {
    section.innerHTML = "<p>não encontrado. Você precisa digitar o nome do atleta ou esporte</p>"
      return 
 }
 campoPesquisa = campoPesquisa.toLowerCase()
  // Obtém a seção HTML com o ID "resultado-pesquisa" e a armazena na variável "section"
  let section = document.getElementById("resultado-pesquisa")
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = ""; 
  let descricao = ""; 
  let tags = ""; 

  // Itera sobre cada elemento "dado" no array "dados"
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais Informações</a>
    </div>
    `;

    }
       
  }
if(!resultados){
  resultados = "<p>Nada foi encontrado</p>"
  }
  // Atribui o HTML gerado para a propriedade innerHTML da seção, substituindo o conteúdo existente
  section.innerHTML = resultados;
}



