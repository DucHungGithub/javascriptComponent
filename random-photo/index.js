const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
    addNewImage();
})

function addNewImage() {
    for (let index = 0; index < 10; index++) {
        const newImageEl = document.createElement("img");
        newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImageEl);

    }

}