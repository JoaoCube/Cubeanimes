/*
//CUIDANDO DA ANIMACAO DO BANNER TOP-SITE
let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  nextImage();
}, 10000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
*/

// Lista de imagens
const imagens = [
  "img-op.png",
  "img-zom100.jpg",
  "img-jujutsu.png",
  "img-Undead-Murder-Farce.jpg",
  "img-mobpsycho.jpg",
];

// Função para escolher uma imagem aleatória
function escolherImagemAleatoria() {
  let indice = Math.floor(Math.random() * imagens.length);
  return imagens[indice];
}

// Alterar a imagem quando a página é carregada
window.addEventListener("load", () => {
  let imagemElemento = document.getElementById("imgSlide");
  let novaImagemSrc = escolherImagemAleatoria();
  imagemElemento.src = novaImagemSrc;
});
