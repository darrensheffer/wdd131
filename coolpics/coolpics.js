const menuButton = document.querySelector(".menu-btn");
const menuToggle = document.querySelector("ul")

function toggleMenu() {
    const menu = document.querySelector("ul");
    menu.classList.toggle("hide");
}


function handleResize() {
    const menu = document.querySelector("ul");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", toggleMenu);