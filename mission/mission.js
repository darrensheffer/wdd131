const themeSelector = document.getElementById('theme-selector');
const body = document.body;
const logo = document.querySelector("#logo");

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        logo.src = "images/byui-logo_white.png"
    } 
    else {
        body.classList.remove('dark-mode');
        logo.src = "images/byui-logo_blue.webp"
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
themeSelector.value = savedTheme;

applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

themeSelector.value = 'dark';
applyTheme('dark');
}

themeSelector.addEventListener('change', (event) => {
const selectedTheme = event.target.value;
applyTheme(selectedTheme);
});