const switchThemeButton = document.querySelector('#theme-button');
const body = document.querySelector("body");
body.classList.add("light");

const toggleThem = () => {
  if (body.classList.contains('light')) {
    body.className = '';
    body.classList.add("dark");
  } else {
    body.className = '';
    body.classList.add("light");
  }
}

switchThemeButton.addEventListener("click", toggleThem, false);