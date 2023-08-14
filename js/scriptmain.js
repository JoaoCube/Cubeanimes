/*
//CUIDANDO DA ANIMACAO DO BANNER TOP-SITE
let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  nextImage();
}, 2000);

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
  "https://cdn-uploads.gameblog.fr/img/news/437782_64c1260b7f81f.jpg",
  "https://image.tmdb.org/t/p/original/u0ijYWX50bvbaUOWr3mpqZ9OcUK.jpg",
  "https://images7.alphacoders.com/131/1318705.png",
  "https://www.animenewsnetwork.com/thumbnails/crop1200x630gHJ/cms/this-week-in-anime/200925/nicky_15.png.jpg",
  "https://saikoanimes.net/wp-content/themes/saikov3/img/slide/mob/mob.jpg",
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
