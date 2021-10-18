const onlyFirstTitle = document.querySelector(".hello h1");
onlyFirstTitle.innerText="first"

const onlyLastTitle = document.querySelector(".hello:nth-child(3) h1");
onlyLastTitle.innerText="last"

const allTitle = document.querySelectorAll(".hello h1")
console.log(allTitle[1].innerText="all")