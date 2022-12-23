let logboek = document.querySelector("logboek")
let button = document.querySelector("button")

button.addEventListener("click", toggle)

function toggle() {
    button.classList.toggle("close")
}