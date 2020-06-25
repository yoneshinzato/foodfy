const modalOverlay = document.querySelector(".modal-overlay");

const modal = document.querySelector(".modal");

const recipes = document.querySelectorAll(".recipe");

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {
    const recipeImgId = recipe.querySelector(".recipe-img").getAttribute("id");
    modalOverlay.classList.add("active");
    modal.querySelector("img").src = `/assets/${recipeImgId}.png`;

    modal.querySelector(".modal-content h3").innerText = recipe.querySelector(
      ".recipe-content h3"
    ).innerText;

    modal.querySelector(".modal-content p").innerText = recipe.querySelector(
      ".recipe-content p"
    ).innerText;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
