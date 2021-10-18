const firstTitle = document.querySelector(".hello h1")

function handleTitleClick(){
    firstTitle.style.color="blue"
}
function handleMouseEnter(){
    firstTitle.innerText="Mouse is here!"
}
function handleMouseLeave(){
    firstTitle.innerText="Mouse is gone !"
}

firstTitle.addEventListener("click",handleTitleClick)
firstTitle.addEventListener("mouseenter",handleMouseEnter)
firstTitle.addEventListener("mouseleave",handleMouseLeave)

console.dir(firstTitle)
