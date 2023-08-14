// repetir header e footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="header">
<li onclick="openModal()" class="btn-hamburger">
    <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
    <p>Navegar</p>
</li>

<a href="./index.html">
    <img src="https://seeklogo.com/images/M/mouz-logo-F58A94DA2F-seeklogo.com.png" class="logo cor-9" alt="">
</a>

<nav aria-label="primaria">
    <ul class="header-menu">
        <li>
            <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
        </li>


        <li id="login" onclick="openLogin()">

        </li>

    </ul>
</nav> <!-- FIM NAVBAR CONTAINER -->
</div> <!-- FIM HEADER -->`;

footer.innerHTML = `
<div class="footer-container">
<div class="footer-redes">
    <a href="#">
        <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
    </a>

    <a href="https://www.instagram.com/_joaocube/">
        <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
    </a>

    <a href="https://github.com/JoaoCube">
        <i class="fa-brands fa-github" style="color: #ffffff;"></i>
    </a>

</div>

<p class="footer-direitos cor-9 font-2-s">CubeElement © Alguns direitos reservados.</p>
</div> <!-- FIM FOOTER CONTAINER -->
`;

//BACKGROUND NO NAV AO ROLAR O SCROLL DO MOUSE PRA BAIXO
var nav = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 18
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

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

// ABRIR MODAL DO HAMBURGER
function openModal() {
  const modalHamburger = document.getElementById("modal-hamburger");
  modalHamburger.classList.add("mostrar");

  modalHamburger.addEventListener("click", (e) => {
    if (e.target.id == "modal-hamburger" || e.target.id == "fechar") {
      modalHamburger.classList.remove("mostrar");
      localStorage.fechaModal = "modal-hamburger";
    }
  });
}

function openLogin() {
  const modalLogin = document.getElementById("modal-login");
  modalLogin.classList.add("mostrar");

  modalLogin.addEventListener("click", (e) => {
    modalLogin.classList.remove("mostrar");
    localStorage.fechaModal = "modal-login";
  });
}
