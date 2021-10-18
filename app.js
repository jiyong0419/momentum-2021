const firstTitle = document.querySelector(".hello h1")
firstTitle.addEventListener("click",handleTitleClick)

function handleTitleClick(){
    firstTitle.style.color="blue"
}
console.dir(firstTitle)