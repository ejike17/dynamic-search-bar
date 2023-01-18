const magnifierEl = document.querySelector(".magnifier");
const containerEl = document.querySelector(".search-bar-container");

magnifierEl.addEventListener('click', () => {
    containerEl.classList.toggle("active");
})