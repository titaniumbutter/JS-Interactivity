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
    message.textContent = `${event.target.parentNode.firstChild.textContent} has been removed!`

    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true) {
        message.textContent = `${event.target.textContent} has been removed!`
    } else {
        message.textContent = `${event.target.textContent} has been added back to the list!`
    }
    revealMessage()
}

function revealMessage() {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}




