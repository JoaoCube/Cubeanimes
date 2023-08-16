// Obtém a lista de itens
const listaItens = document.getElementById("listaPass");

// Obtém todos os itens da lista
const itens = listaItens.getElementsByTagName("li");

// Adiciona um ouvinte de evento de clique a cada item
for (let i = 0; i < itens.length; i++) {
  itens[i].addEventListener("click", function () {
    // Remove a classe "ativo" de todos os itens
    for (let j = 0; j < itens.length; j++) {
      itens[j].classList.remove("ativo");
    }

    // Adiciona a classe "ativo" ao item clicado
    this.classList.add("ativo");
  });
}

// Obtém o botão e o container
const trocarDivBtn = document.getElementById("trocarDivBtn");
const container = document.getElementById("elementoAlvo");

// Adiciona um ouvinte de evento de clique ao botão
trocarDivBtn.addEventListener("click", function () {
  // Remove a div existente
  const div1 = document.getElementById("listaPass");
  container.removeChild(div1);

  // Cria uma nova div
  const div2 = document.createElement("div");
  div2.id = "pagamento";
  div2.innerHTML = `
  <article class="pay-container" id="pagamento">
  <div class="pay-conteudo">
      <ul class=' cor-8 font-2-mR'>
      <li>
      <input type="radio" name="my-input" id="pix" value="Pix" />
      <label for="Yes">Pix</label>
      </li>
      <li>
      <input type="radio" name="my-input" id="boleto" value="Boleto" />
      <label for="Boleto">Boleto</label>
      </li>
      <li>
      <input type="radio" name="my-input" id="cartao" value="Boleto" />
      <label for="Cartao de Credito">Cartao de Credito</label>
      </li>
      </ul>
  </div>
</article>`;

  // Adiciona a nova div ao container
  container.appendChild(div2);
});
