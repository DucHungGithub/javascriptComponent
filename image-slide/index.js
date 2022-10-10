const leftEl = document.querySelector(".pre");
const rightEl = document.querySelector(".next");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
var currentImg = 1;
let timeout;
leftEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})
rightEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

function updateImg() {
    if (currentImg > imgsEl.length)
        currentImg = 1;
    else if (currentImg < 1)
        currentImg = imgsEl.length;
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}
updateImg();