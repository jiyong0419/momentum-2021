const h1 = document.querySelector(".hello:nth-child(2) h1")

function changeColor(){
    h1.classList.toggle("clicked")
}
h1.addEventListener("click",changeColor)