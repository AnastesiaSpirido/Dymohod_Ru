const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector (".js-input");
const searchForm = document.querySelector (".js-form")


searchForm.addEventListener ("submit", function(evt) {
    evt.preventDefault();
})

searchInput.addEventListener('change', function(evt){
    evt.preventDefault();
    const value = evt.target.value;
    try {
        if ( (!+value)) {
            throw new Error ('Это не число')
        }
        if (value < 5) {
          throw new Error ('Значение меньше 5')
    }
    if (value > 10) {
        throw new Error ('Значение больше 10')
    }

} catch (err) {
    console.log(err);
    resultsContainer.innerHTML = `<div class="response-container"> ${err} </div>`
}
})