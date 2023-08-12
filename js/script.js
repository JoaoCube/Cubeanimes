// Perguntas Frequentes
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*
// MOSTRAR POP UP AUTOMATIC DEPOIS DE X SEGUNDOS DE PAGINA
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
    popup.style.opacity = "1";

    // ADICIONAR ALGUNS SEGUNDOS DE DELAY PRA MOSTRAR O POP UP
  }, 30000);
};
// FECHAR POP UP AO CLICAR NO X
close.addEventListener("click", () => {
  popup.style.display = "none";
});
*/

//BACKGROUND NO NAV AO ROLAR O SCROLL DO MOUSE PRA BAIXO
var nav = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 18
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

// ABRIR MODAL DO HAMBURGER
function openModal() {
  const modal = document.getElementById("modal-hamburger");
  modal.classList.add("mostrar");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-hamburger" || e.target.id == "fechar") {
      modal.classList.remove("mostrar");
      localStorage.fechaModal = "modal-hamburger";
    }
  });
}

// function toggleP() {
//   let p = document.getElementById("resposta");
//   if (p.style.display === "none") {
//     p.style.display = "block";
//   } else {
//     p.style.display = "none";
//   }
// }
