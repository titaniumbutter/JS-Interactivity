console.log('Hello world')
document.querySelector("form").addEventListener("submit", addMovie);
let message = document.querySelector("#message")

function addMovie (event) {
    event.preventDefault();
    let inputField = document.querySelector("input");

    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul")
    list.appendChild(movie)


    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie has been Deleted'
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true) {
        message.textContent = "Movie has been watched!"
    } else {
        message.textContent = "Movie has been added back to the list!"
    }
}




