var logboek = document.getElementById("logboek");
var label = document.getElementById("label");
var artikels = document.getElementById("artikels");
var img = document.getElementById("img");

function fold() {
    logboek.classList.toggle("closed");
    label.classList.toggle("hide");
    artikels.classList.toggle("move");
    img.classList.toggle("rotate");
}
