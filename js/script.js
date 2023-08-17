// repetir header e footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="header">
<div class="leftmenu" onclick="openHamburger()">
    <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
    <p class="cor-8">Navegar</p>
</div>

<a href="./index.html">
    <img src="https://seeklogo.com/images/M/mouz-logo-F58A94DA2F-seeklogo.com.png" class="logo cor-9" alt="">
</a>

<nav aria-label="primaria">
    <div class="rightmenu">
        <div class="search" onclick="openSearch()">
            <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
        </div>
        <div id="login" onclick="openLogin()"></div>
    </div>
</nav> <!-- FIM NAVBAR CONTAINER -->
</div> <!-- FIM HEADER -->
`;
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

// Ativar Links do LeftModal Sidebar
const links = document.querySelectorAll(".modalLeft .menu-item .item a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//BACKGROUND NO NAV AO ROLAR O SCROLL DO MOUSE PRA BAIXO
let nav = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 18
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

// Perguntas Frequentes
let acc = document.getElementsByClassName("accordion");
let i;

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

// ABRIR MODAL DO HAMBURGER
function openHamburger() {
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
    if (e.target.id == "modal-login" || e.target.id == "fechar") {
      modalLogin.classList.remove("mostrar");
      localStorage.fechaModal = "modal-login";
    }
  });
}
/*
function openSearch() {
  const modalCenter = document.getElementById("modal-search");
  modalCenter.classList.add("mostrar");

  modalCenter.addEventListener("click", (e) => {
    if (e.target.id == "modal-search" || e.target.id == "fechar") {
      modalCenter.classList.remove("mostrar");
      localStorage.fechaModal = "modal-search";
    }
  });
}
*/
