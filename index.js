const filterButtons = document.querySelectorAll(".filter_button button");
const gameCards = document.querySelectorAll(".game_cards .card");
const input = document.querySelector("#input");

const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    gameCards.forEach(card => {

        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");

        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("input");
    const cards = document.querySelectorAll(".game_cards .card");

    searchInput.addEventListener("keyup", () => {
        const searchValue = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const gameName = card.querySelector(".card_text").textContent.toLowerCase();
            const gameCategory = card.getAttribute("data-name").toLowerCase();

            if (gameName.includes(searchValue) || gameCategory.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

filterButtons.forEach(button => button.addEventListener("click", filterCard));