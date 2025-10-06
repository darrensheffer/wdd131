document.querySelector("select").addEventListener("change", changeTheme);


function changeTheme(event) {
    const mode = document.querySelector("select");
    if (mode == "Dark") {
        document.querySelector("body")
        mode.classList.add("dark")
    }
}