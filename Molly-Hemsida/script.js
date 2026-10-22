const temaknapp = document.querySelector("#tema");

function uppdateraTemaknapp() {
    const morktLage = document.body.classList.contains("morkt");
    temaknapp.textContent = morktLage ? "Byt till ljust läge" : "Byt till mörkt läge";
    temaknapp.setAttribute("aria-pressed", String(morktLage));
}

if (localStorage.getItem("tema") === "morkt") {
    document.body.classList.add("morkt");
}

uppdateraTemaknapp();

function bytTema() {
    document.body.classList.toggle("morkt");
    const morktLage = document.body.classList.contains("morkt");
    localStorage.setItem("tema", morktLage ? "morkt" : "ljust");
    uppdateraTemaknapp();
}

temaknapp.addEventListener("click", bytTema);
