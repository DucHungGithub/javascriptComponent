const colorEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add('color-container');
    colorEl.appendChild(colorContainerEl);
}
const colorContEls = document.querySelectorAll(".color-container");


function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum, randomNum + 1);
    }
    return color;
}

function generateColor() {
    colorContEls.forEach((colorContEl) => {
        const newColor = randomColor();
        colorContEl.style.backgroundColor = "#" + newColor;
        colorContEl.innerText = "#" + newColor;

    });
}

generateColor();