// repetir header e footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div id="modal-hamburger" class="modal-hamburger">
<div class="modalLeft">
    <ul class="menu-item">
        <li class="item">
            <a href="./index.html">
                <div class="item-icon">
                    <i class="fa-solid fa-house" style="color: #ffffff;"></i>
                </div>
                <div class="text-icon">
                    <strong class="cor-9">Inicio</strong>
                    <p class="cor-7">Voltar ao inicio do site.</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="./sobre.html">
                <div class="item-icon">
                    <i class="fa-solid fa-list-check" style="color: #ffffff;"></i>
                </div>
                <div class="text-icon">
                    <strong>Sobre</strong>
                    <p>Saiba sobre a CubeAnimes!</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="./onepiece.html">
                <div class="item-icon">
                    <i class="fa-solid fa-book" style="color: #ffffff;"></i>
                </div>
                <div class="text-icon">
                    <strong>Animes</strong>
                    <p>Veja todo nosso catalogo.</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="#">
                <div class="item-icon">
                    <i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>
                </div>
                <div class="text-icon">
                    <strong>Calendário</strong>
                    <p>Data de cada episodio.</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="Cubepass.html">
                <div class="item-icon">
                    <i class="fa-solid fa-star" style="color: #ffffff;"></i>
                </div>
                <div class="text-icon">
                    <strong>Cube Pass</strong>
                    <p>Tenha acesso a tudo.</p>
                </div>
            </a>
        </li>
        <li class="item">
            <a href="contato.html">
                <div class="item-icon">
                    <i class="fa-solid fa-comment" style="color: #ffffff;"></i>
                </div> <!-- FIM ITEM ICON -->
                <div class="text-icon">
                    <strong>Contato</strong>
                    <p>Fale conosco no chat.</p>
                </div>
            </a>
        </li>
    </ul>
</div> <!-- FIM MODAL LEFT -->
</div> <!-- FIM MODAL HAMBURGER -->

<div id="modal-login" class="modal-login">
<div class="modalRight">
    <ul class="menu-conta">
        <a href="login.html">
            <div class="btn-conta">
                <i class="fa-solid fa-right-to-bracket" style="color: #ffffff;"></i>
                <li class="menu-conta-item cor-8">
                    <strong class="cor-8">Login</strong>
                    <p class="cor-7">Faça login na sua conta</p>
                </li>
            </div>
        </a>

        <a href="cadastrar.html">
            <div class="btn-conta cadastro">
                <i class="fa-solid fa-right-to-bracket" style="color: #ffffff;"></i>
                <li class="menu-conta-item cor-8">
                    <strong class="cor-8">Cadastrar</strong>
                    <p class="cor-7">Crie uma conta agora!</p>
                </li>
            </div>
        </a>
    </ul>
</div>
</div>
<div id="modal-search" class="modal-search">
<div class="modalCenter">
    <label for="Pesquisar">
        <input type="text" class="txtBusca cor-7" placeholder="Pesquisar Anime..." />
        <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;" id="btnBusca" alt="Buscar"></i>
    </label>


</div>
</div>

<div class="header">
<div class="leftmenu" onclick="openHamburger()">
<i class="fa-solid fa-bars fa-lg" style="color: #ffffff;"></i>
</div>

<a href="./index.html">
    <img src="https://seeklogo.com/images/M/mouz-logo-F58A94DA2F-seeklogo.com.png" class="logo cor-9" alt="">
</a>

<nav aria-label="primaria">
    <div class="rightmenu">
        <div class="search" onclick="openSearch()">
        <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #ffffff;"></i>
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
