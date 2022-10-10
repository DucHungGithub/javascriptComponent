const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const posX = event.offsetX;
    const posY = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = posX + "px";
    spanEl.style.top = posY + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});