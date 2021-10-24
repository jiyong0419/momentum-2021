const images = [
    "chelsea.jpg","liverpool.jpg","munhern.jpg","park.jpg","realmadrid.jpg","son.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)