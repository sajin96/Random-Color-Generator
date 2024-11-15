const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add("color-container");
    containerEl.appendChild(colorcontainerEl);
}

const colorcontainerEls = document.querySelectorAll(".color-container")

generatecolors()

function generatecolors(){
    colorcontainerEls.forEach((colorcontainerEl) => {
        const newColorcode = randomcolor();
        colorcontainerEl.style.backgroundColor = "#" + newColorcode;
        colorcontainerEl.innerHTML = "#" + newColorcode;
    })
}

function randomcolor(){
    const chars = "0123456789abcdef";
    const colorcodelength = 6;
    let color = ""
    for (let index = 0; index < colorcodelength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum, randomNum+1);
    }
    return color;
}