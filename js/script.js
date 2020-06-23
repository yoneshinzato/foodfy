const modalOverlay = document.querySelector('.modal-overlay')

const modal = document.querySelector('.modal')

const recipes = document.querySelector('.recipe')

for (let recipe of recipes) {
  recipe.addEventListener('click', function () {
    modalOverlay.classList.add('active')
  })
}