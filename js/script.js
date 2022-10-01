const openEl = document.getElementById("open");
const closeEl = document.getElementById("close");

const containerEl = document.querySelector(".container");


openEl.addEventListener("click", () => {
    containerEl.classList.add("show-up");
})

closeEl.addEventListener("click", () => {
    containerEl.classList.remove("show-up");
})