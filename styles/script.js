//CUIDANDO DA ANIMACAO DO BANNER TOP-SITE
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 8000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

///////////////////////////////////////////////////////////
// MOSTRAR POP UP AUTOMATIC DEPOIS DE X SEGUNDOS DE PAGINA
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
    popup.style.opacity = "1";

    // ADICIONAR ALGUNS SEGUNDOS DE DELAY PRA MOSTRAR O POP UP
  }, 60000);
};
// FECHAR POP UP AO CLICAR NO X
close.addEventListener("click", () => {
  popup.style.display = "none";
});

///////////////////////////////////////////////////////////
// ABRIR E FECHAR O HAMBURGER
function showModal() {
  var element = document.getElementById("modal");
  element.classList.add("show-modal");
}

function closeModal() {
  var element = document.getElementById("modal");
  element.classList.remove("show-modal");
}

///////////////////////////////////////////////////////////
// PERGUNTA SE QUER NOTIFICACAO DO SITE
function notifyMe() {
  // Verifica se o browser suporta notificações
  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }

  // Vamos verificar se as permissões de notificação já foram concedidas
  else if (Notification.permission === "granted") {
    // Se estiver tudo bem, vamos criar uma notificação
    var notification = new Notification("Hi there!");
  }

  // Caso contrário, precisamos pedir permissão ao usuário
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // Se o usuário aceitar, vamos criar uma notificação
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // Por fim, se o usuário negou as notificações e você
  // quer ser respeitoso, não há necessidade de incomodá-los mais.
}

//BACKGROUND NO NAV AO ROLAR O SCROLL DO MOUSE PRA BAIXO
var nav = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 10
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};
